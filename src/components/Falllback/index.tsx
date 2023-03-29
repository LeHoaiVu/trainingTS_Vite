import Loading from '~/components/Loading'

export interface IAppProps {}

export default function Fallback(props: IAppProps) {
    return <Loading />
}
