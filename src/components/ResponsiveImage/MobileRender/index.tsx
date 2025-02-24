"use client"
import useWindowsWidth from '@/hooks/useWindowWidth'
import Image from 'next/image'
import React from 'react'

function MobileImage({ src, alt, checkpoint, height, width }) {
    const windowWidth = useWindowsWidth()
    return (
        <div>
            {
                windowWidth && windowWidth <= checkpoint ? (

                    <Image
                        src={src}
                        alt={alt}
                        width={width}
                        height={height}
                    />
                ) : null
            }
        </div>
    )
}

export default MobileImage
