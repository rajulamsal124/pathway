'use client'

interface IProps {
    decisionpointList: any[]
}

const DecisionFilter: React.FC<IProps> = ({decisionpointList }) => {
    return (
        <h1>Hello world from decision filter</h1>
    )
}

export { DecisionFilter}