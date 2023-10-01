'use client'

interface IProps {
    levelsList: any[]
}

const LevelsFilter: React.FC<IProps> = ({levelsList }) => {
    return (
        <h1>Hello world from levels filter</h1>
    )
}

export { LevelsFilter}