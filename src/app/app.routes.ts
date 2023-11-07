import { Route } from "@angular/router";

export const appRoutes: Route[] = [
    {
        path: 'home',
        loadChildren: () => import('src/app/components/home').then((m) => m.)
    },
    {
        path: 'register',
        loadChildren: () => import('src/app/auth/auth.route').then((m) => m.registerRoutes)
    }
]