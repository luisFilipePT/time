import AddProjectModal from './AddProjectModal'
import EditProjectModal from './EditProjectModal'
import DeleteProjectModal from './DeleteProjectModal'
import AddTimeModal from './AddTimeModal'
import DeleteTimeModal from './DeleteTimeModal'

export const INITIAL_STATE = {
    open: false,
    data: null,
    content: null,
    id: null,
    title: null,
}

export const reducer = (state, { type, payload }) => {
    switch (type) {
        case 'OPEN_ADD': {
            return {
                open: true,
                title: 'Add Project',
                data: null,
                content: (
                    <AddProjectModal
                        closeModal={payload.closeModal}
                        id="ADD_MODAL"
                    />
                ),
                id: 'ADD_MODAL',
            }
        }
        case 'OPEN_EDIT': {
            return {
                open: true,
                title: `Edit ${payload.name}`,
                data: null,
                content: (
                    <EditProjectModal
                        data={{
                            id: payload.id,
                            name: payload.name,
                            description: payload.description,
                        }}
                        closeModal={payload.closeModal}
                        id="EDIT_MODAL"
                    />
                ),
                id: 'EDIT_MODAL',
            }
        }
        case 'OPEN_DELETE': {
            return {
                open: true,
                title: `Delete ${payload.name}`,
                data: null,
                content: (
                    <DeleteProjectModal
                        data={{
                            id: payload.id,
                            name: payload.name,
                        }}
                        closeModal={payload.closeModal}
                        id="DELETE_MODAL"
                    />
                ),
                id: 'DELETE_MODAL',
            }
        }
        case 'OPEN_ADD_TIME': {
            return {
                open: true,
                title: 'Add Hours',
                data: null,
                content: (
                    <AddTimeModal
                        data={{ project: payload.project }}
                        closeModal={payload.closeModal}
                        id="ADD_TIME_MODAL"
                    />
                ),
                id: 'ADD_TIME_MODAL',
            }
        }
        case 'CLOSE': {
            return INITIAL_STATE
        }
        case 'OPEN_DELETE_TIME': {
            return {
                open: true,
                title: 'Delete Time',
                data: null,
                content: (
                    <DeleteTimeModal
                        data={{
                            id: payload.id,
                        }}
                        closeModal={payload.closeModal}
                        id="DELETE_TIME_MODAL"
                    />
                ),
                id: 'DELETE_TIME_MODAL',
            }
        }
    }
}
