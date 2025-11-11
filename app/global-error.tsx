'use client'
import { ErrorModal } from '@/components/errorModal';

export default function GlobalError () {
    return <ErrorModal props={{ error: 'A global error has occurred.' }} />;
}