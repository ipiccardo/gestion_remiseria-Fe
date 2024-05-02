import Link from "next/link";

export function DialogDemo({ sendBack, data }: any) {
    return (
        <div className="fixed top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 bg-white p-8 rounded-md shadow-lg">
            <h1 className="text-2xl font-bold mb-4">{`¡${data} Agregado Exitosamente!`}</h1>
            <p className="text-lg text-gray-700 mb-8">¡Felicidades!</p>
            <Link href={`/${sendBack}`}
                className="block bg-blue-700 hover:bg-blue-900 text-white font-bold py-2 px-4 rounded">
                Continuar

            </Link>
        </div>
    );
}