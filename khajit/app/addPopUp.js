'use client'

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faUser,
  faBookmark,
  faArrowsUpDown,
  faArrowUp,
  faArrowDown,
} from "@fortawesome/free-solid-svg-icons";
import { useState } from "react";
import prisma from 'lib/prisma';
import { useSearchParams } from 'next/navigation'

/** Unused Popup file */

export default function AddPopUp() {
    
    const [isDisplay, setDisplay] = useState(false);
    const toggleDisplay = () => setDisplay(!isDisplay);
    const searchParams = useSearchParams();
    
    return (
        <>
            <div onClick={toggleDisplay} className='text-cardinal inline float-right'>Download</div>
            <div className='w-full relative h-full overflow-hidden bg-rustyred'>
                {isDisplay && (
                    <div className='bg-snowdarker bg-opacity-30 w-full h-full border-4 border-snow text-jet'>
                        <div className='bg-snowdarker w-6/12 h-5 flex m-2'>
                            <h1>{searchParams.get('Name')} </h1>
                            <h1>${searchParams.get('Price')} </h1>
                            <h1>{searchParams.get('Rating')}/5 </h1>
                            <h1>{searchParams.get('Platform')} </h1>
                            <h1>{searchParams.get('Download')} Downloads</h1>
                            <h1>{searchParams.get('RequiredSystem')} </h1>
                        </div>
                    </div>
                    )
                }
            </div>
        </>
    );
}