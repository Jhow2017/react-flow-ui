/* eslint-disable react/react-in-jsx-scope */
/* eslint-disable react/display-name */

import React, { forwardRef, useRef } from 'react'

import type { DsModalType } from './types'

import ComponentMounter from '../../../core/utils/component-mounter'

import { AnimatePresence, domAnimation, LazyMotion, m } from 'framer-motion'
import DsButton from '../button'
import DsIcon from '../icon'
import { DsBox } from '../../../layout'

const DsModal: React.FC<DsModalType> = forwardRef((props, ref) => {
  const { children, ...attr } = props

  const stopPropagation = e => {
    e.stopPropagation()
  }

  return (
    <ComponentMounter
      as="div"
      ref={ref}
      _styles={{
        position: 'fixed',
        top: '0',
        right: '0',
        left: '0',
        height: '100vh',
        background: attr.isVisible ? 'rgba(0, 0, 0, 0.3)' : 'rgba(0, 0, 0, 0)',
        visibility: attr.isVisible ? 'visible' : 'hidden',
        opacity: attr.isVisible ? '1' : '0',
        transition: 'all ease 0.2s',
        //zIndex: '9999',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center'
      }}
      // _css={attr._css || { sm: 'backdrop-filter: blur(5px)' }}
      //@ts-ignore
      onClick={attr?.onClickOutside}
    >
      <LazyMotion features={domAnimation}>
        <AnimatePresence>
          <DsBox
            className="container-modal"
            height={{ sm: '100%', md: 'auto' }}
            width={'100%'}
          >
            {attr.isVisible && (
              <m.div
                initial={{ opacity: 0, y: 50, width: '100%' }}
                animate={{ opacity: 1, y: 0, width: '100%' }}
                exit={{ opacity: 0, width: '100%' }}
                transition={{ delay: 0.1 }}
              >
                <DsBox
                  position="relative"
                  bgColor="var(--white)"
                  borderRadius="10px"
                  p="32px"
                  boxShadow="0px 4px 8px  rgba(0, 0, 0, 0.3)"
                  margin="auto"
                  h="fit-content"
                  transition="all 0.35s cubic-bezier(0.4,0,0.2,1)"
                  onClick={e => stopPropagation(e)}
                  {...attr}
                >
                  {children}
                  {attr.closeModal && (
                    <DsButton
                      variant="default"
                      border="0"
                      bgColor="unset"
                      lineHeight="0"
                      position="absolute"
                      top="0"
                      right="0"
                      margin="32px"
                      cursor="pointer"
                      type="button"
                      _css={{
                        sm: `
                          svg {
                              path {
                                  transition: 0.3s;
                              }
                              &:hover {
                                  path {
                                      transition: 0.3s;
                                      fill: var(--blue);
                                  }
                              }
                          }
                                    `
                      }}
                      onClick={() => attr.closeModal && attr.closeModal()}
                    >
                      <DsIcon
                        icon="close"
                        size="small"
                        _css={{
                          sm: `
                                            svg {
                                                [stroke] {
                                                    transition: 0.3s;
                                                }
                                            }

                                            &:hover {
                                                svg {
                                                    [stroke] {
                                                        stroke: var(--liqiBlue);
                                                    }
                                                }
                                            }
                                    `
                        }}
                      />
                    </DsButton>
                  )}
                </DsBox>
              </m.div>
            )}
          </DsBox>
        </AnimatePresence>
      </LazyMotion>
    </ComponentMounter>
  )
})

export default DsModal
