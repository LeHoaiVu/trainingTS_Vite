import * as React from 'react'

export interface IRoute {
    path: string
    component: React.FunctionComponent
    private: boolean
}

export type ListRoutes = IRoute[]
