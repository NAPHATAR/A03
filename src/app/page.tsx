import Banner from '../components/Banner';
import Card from '../components/Card';

export default function Home() {
    return (
        <>
            <title>Vaccine Service</title>
            <meta name="description" content="Vaccine Service Center" />
            <link rel="icon" href="vaccine_icon.png" />
            <main>
                <Banner />
                <Card />
            </main>
        </>
    )
}