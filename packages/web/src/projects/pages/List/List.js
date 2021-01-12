import React, { useReducer } from 'react'
import { useHistory } from 'react-router-dom'
import { useQuery } from '@apollo/client'
import styled from 'styled-components'

import QUERIES from '../../queries/ListQueries'
import Card from '../../../shared/components/Card'
import CustomLink from '../../../shared/components/CustomLink'

import PageTitle from '../../../shared/components/PageTitle'
import Button from '../../../shared/components/Button'
import Modal from '../../../shared/components/Modal'
import { INITIAL_STATE, reducer } from '../../modals/modalManager'

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

const List = () => {
    const { loading, error, data } = useQuery(QUERIES.GET_PROJECTS)
    let history = useHistory()
    const [modalState, dispatch] = useReducer(reducer, INITIAL_STATE)

    const closeModal = () => {
        dispatch({ type: 'CLOSE' })
    }

    const onProjectEdit = (project) => {
        dispatch({
            type: 'OPEN_EDIT',
            payload: { ...project, closeModal: closeModal },
        })
    }

    const onProjectDelete = (project) => {
        dispatch({
            type: 'OPEN_DELETE',
            payload: { ...project, closeModal: closeModal },
        })
    }

    const onProjectNew = () => {
        dispatch({ type: 'OPEN_ADD', payload: { closeModal: closeModal } })
    }

    return (
        <>
            <PageTitle title="PROJECTS" />
            <AddButtonWrapper>
                <Button variant="BLUE" onClick={onProjectNew}>
                    New Project 🚀
                </Button>
            </AddButtonWrapper>
            {loading && <li>Loading</li>}
            {data?.projects.length === 0 && <p>No projects added yet</p>}
            {!loading &&
                data.projects.map((project) => (
                    <Card key={project.id}>
                        <Grid>
                            <div style={{ flex: 3 }}>
                                <CustomLink
                                    to={{
                                        pathname: `/project/${project.name}`,
                                        state: { projectId: project.id },
                                    }}
                                >
                                    <h2>{project.name}</h2>
                                </CustomLink>
                                <p>{project.description}</p>
                            </div>
                            <WrapperDiv>
                                <Button
                                    variant="GREEN"
                                    onClick={() =>
                                        history.push(
                                            `/project/${project.name}`,
                                            {
                                                projectId: project.id,
                                            }
                                        )
                                    }
                                >
                                    View 👀
                                </Button>
                                <Button
                                    variant="GREEN"
                                    onClick={() => onProjectEdit(project)}
                                >
                                    Update ✏️
                                </Button>
                                <Button
                                    variant="RED"
                                    onClick={() => onProjectDelete(project)}
                                >
                                    Delete 🗑
                                </Button>
                            </WrapperDiv>
                        </Grid>
                    </Card>
                ))}
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

export default List
