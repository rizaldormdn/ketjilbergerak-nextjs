import React from 'react'

type props = {
     children: React.ReactNode
}
export const Container = (props: props) => {
  return (
    <div>{props.children}</div>
  )
}
