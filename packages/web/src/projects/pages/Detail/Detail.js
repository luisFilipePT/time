import { useReducer } from 'react'
import { useParams, useLocation } from 'react-router-dom'
import { useQuery } from '@apollo/client'
import styled from 'styled-components'

import QUERIES from '../../queries/ListQueries'
import PageTitle from '../../../shared/components/PageTitle'
import Card from '../../../shared/components/Card'
import Button from '../../../shared/components/Button'
import { INITIAL_STATE, reducer } from '../../modals/modalManager'
import Modal from '../../../shared/components/Modal'

const Grid = styled.div`
    display: flex;
    flex-wrap: wrap;
    justify-content: space-between;
    padding-left: 20px;
    padding-right: 20px;
`

const WrapperDiv = styled.div`
    display: flex;
    flex: 1;
    justify-content: space-around;
    align-items: flex-end;
    align-self: flex-end;
    height: 100%;
    margin-left: 15px;
`

const AddButtonWrapper = styled.div`
    width: 100%;
    display: flex;
    padding: 20px;
    justify-content: flex-end;
`

const Detail = () => {
    let { slug } = useParams()
    let location = useLocation()
    const [modalState, dispatch] = useReducer(reducer, INITIAL_STATE)

    localStorage.setItem(
        'currentProjectId',
        location.state.projectId || localStorage.getItem('currentProjectId')
    )

    const { loading, error, data } = useQuery(QUERIES.GET_PROJECT, {
        variables: {
            id:
                location.state.projectId ||
                localStorage.getItem('currentProjectId'),
        },
    })

    const closeModal = () => {
        dispatch({ type: 'CLOSE' })
    }

    const onTimeNew = () => {
        dispatch({
            type: 'OPEN_ADD_TIME',
            payload: { closeModal: closeModal, project: data.project.id },
        })
    }

    const onTimeDelete = (time) => {
        console.log('time', time)
        dispatch({
            type: 'OPEN_DELETE_TIME',
            payload: { id: time.id, closeModal: closeModal },
        })
    }

    console.log('data', data)
    console.log('loading', loading)

    return (
        <>
            <PageTitle title={slug} />
            {loading && <h4>Loading</h4>}
            {!loading && (
                <>
                    <h2>{data.project?.description || ''}</h2>
                    <AddButtonWrapper>
                        <Button variant="BLUE" onClick={onTimeNew}>
                            Add Time 🕜
                        </Button>
                    </AddButtonWrapper>
                    <h3>⏱&nbsp;&nbsp;Times</h3>
                    {data.project.time.length === 0 && (
                        <p>No times added yet</p>
                    )}
                    {data.project.time.map((time) => (
                        <Card key={time.id}>
                            <Grid>
                                <div style={{ flex: 3 }}>
                                    <h2>{time.amount}</h2>
                                    <p>{time.description}</p>
                                </div>
                                <WrapperDiv>
                                    <Button
                                        variant="RED"
                                        onClick={() => onTimeDelete(time)}
                                    >
                                        Delete 🗑
                                    </Button>
                                </WrapperDiv>
                            </Grid>
                        </Card>
                    ))}
                </>
            )}
            <Modal
                formId={modalState.id}
                isOpen={modalState.open}
                title={modalState.title}
                closeModal={closeModal}
            >
                {modalState.content}
            </Modal>
        </>
    )
}

export default Detail
