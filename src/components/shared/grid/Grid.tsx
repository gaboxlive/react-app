import React from 'react';

interface GridProps {
    goToPrev?: () => void;
    goToNext?: () => void;
    children: React.ReactNode;
}

export const Grid: React.FC<GridProps> = ({ children, goToPrev, goToNext }) => (
    <div className='container mx-auto w-full'>
        <div className='grid xs:grid-cols-1 sm:grid-cols-1 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-4 gap-3 mx-auto place-items-center'>
            {children}
        </div>
        <div className='flex justify-center mt-4 gap-5'>
            {goToPrev &&
                <button onClick={goToPrev}>Previous</button>
            }
            {goToNext &&
                <button onClick={goToNext}>Next</button>
            }
        </div>
    </div>
)