import React, { useEffect, useRef } from 'react'
import { createPortal } from 'react-dom'
import styled, { keyframes } from 'styled-components'
import Button from './Button'

const fadeIn = keyframes`
  0% {
    opacity: 0;
  }
  100% {
    opacity: 1;
  }
`

const Overlay = styled.div`
    display: flex;
    justify-content: center;
    align-items: center;
    position: fixed;
    top: 0;
    left: 0;
    bottom: 0;
    right: 0;
    background-color: rgba(59, 66, 82, 0.6);
    z-index: 2000;
    animation: 0.3s ${fadeIn} ease-out;
`

const ModalWrapper = styled.div`
    position: relative;
    width: 80%;
    height: 60%;
    z-index: 2100;
    border-radius: 4px;
    background: #2e3440;
    box-shadow: 24px 24px 48px #2a2f3a, -24px -24px 48px #323946;
    color: #e5e9f0;
`

const ModalHeader = styled.div`
    display: flex;
    justify-content: space-between;
    height: 80px;
    padding: 15px;
    color: #e5e9f0;
    text-shadow: 3px 3px 2px #4c566a;
    letter-spacing: 2px;
    border-bottom: 1px solid #b48ead;
`

const ModalFooter = styled.div`
    position: absolute;
    display: flex;
    justify-content: flex-end;
    align-items: center;
    bottom: 0;
    left: 0;
    width: 100%;
    height: 80px;
    padding: 15px;
    border-top: 1px solid #b48ead;
`

const ModalContent = styled.div`
    height: 100%;
    padding: 15px;
`

function useOutsideAlerter(ref, cb) {
    useEffect(() => {
        /**
         * Alert if clicked on outside of element
         */
        function handleClickOutside(event) {
            if (ref.current && !ref.current.contains(event.target)) {
                cb(false)
            }
        }
        // Bind the event listener
        document.addEventListener('mousedown', handleClickOutside)
        return () => {
            // Unbind the event listener on clean up
            document.removeEventListener('mousedown', handleClickOutside)
        }
    }, [ref])
}

const modalRoot = document.getElementById('modal-root')

const Modal = ({ isOpen, closeModal, title, formId, children }) => {
    // element to which the modal will be rendered
    const el = document.createElement('div')
    const wrapperRef = useRef(null)
    useOutsideAlerter(wrapperRef, closeModal)

    useEffect(() => {
        modalRoot.appendChild(el)

        return () => {
            modalRoot.removeChild(el)
        }
    }, [el])

    return (
        isOpen &&
        createPortal(
            // child element
            <Overlay>
                <ModalWrapper ref={wrapperRef}>
                    <ModalHeader>
                        <h1>{title}</h1>
                        <span
                            style={{ cursor: 'pointer' }}
                            onClick={closeModal}
                        >
                            ❌
                        </span>
                    </ModalHeader>
                    <ModalContent>{children}</ModalContent>
                    <ModalFooter>
                        <Button variant="RED" onClick={closeModal}>
                            CANCEL
                        </Button>
                        <Button variant="GREEN" type="submit" form={formId}>
                            SAVE
                        </Button>
                    </ModalFooter>
                </ModalWrapper>
            </Overlay>,
            el
        )
    )
}

export default Modal
