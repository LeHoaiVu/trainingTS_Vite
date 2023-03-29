export interface IAppProps {}

export default function Loading(props: IAppProps) {
    return (
        <div className='loader-container'>
            <div className='spinner'></div>
        </div>
    )
}
