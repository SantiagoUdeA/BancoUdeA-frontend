import Header from '@modules/shared/components/Header'
import { Card, CardContent, Typography } from '@mui/joy'
import { XOctagonIcon } from 'lucide-react'
import { useRouteError } from 'react-router'

export default function ErrorPage() {
    const error = useRouteError()

    return (
        <>
            <Header className="px-16 py-2" />
            <main className="w-screen">
                <Card
                    sx={{
                        width: 'fit-content',
                        textAlign: 'center',
                        margin: 'auto',
                        marginTop: '4em',
                    }}
                >
                    <Typography level="h1">There was an error</Typography>
                    <CardContent>
                        <Typography startDecorator={<XOctagonIcon/>} level='body-md' sx={{ textAlign: 'center'}}>
                            {error instanceof Error
                                ? error.message
                                : 'Unkwon error, please try again later'}
                        </Typography>
                    </CardContent>
                </Card>
            </main>
        </>
    )
}
