import React from 'react'
import socialLinks from '../data/social.json'

const Social = () => (
    <div className='social'>
        <a target='blank' href={socialLinks[0].url} title={socialLinks[0].name}>
            <svg
                className='social-icon'
                data-icon='github'
                viewBox='0 0 32 32'
                style={{ fill: '#2D3539' }}>
                <title>{socialLinks[0].name}</title>
                <path d='M0 18 C0 12 3 10 3 9 C2.5 7 2.5 4 3 3 C6 3 9 5 10 6 C12 5 14 5 16 5 C18 5 20 5 22 6 C23 5 26 3 29 3 C29.5 4 29.5 7 29 9 C29 10 32 12 32 18 C32 25 30 30 16 30 C2 30 0 25 0 18 M3 20 C3 24 4 28 16 28 C28 28 29 24 29 20 C29 16 28 14 16 14 C4 14 3 16 3 20 M8 21 A1.5 2.5 0 0 0 13 21 A1.5 2.5 0 0 0 8 21 M24 21 A1.5 2.5 0 0 0 19 21 A1.5 2.5 0 0 0 24 21 z' />
            </svg>
        </a>

        <a target='blank' href={socialLinks[1].url} title={socialLinks[1].name}>
            <svg
                className='social-icon'
                x='0px'
                y='0px'
                viewBox='0 0 48 48'
                style={{ fill: '#2D3539' }}>
                {' '}
                ><title>{socialLinks[1].name}</title>
                <path
                    fill='#2D3539'
                    d='M48,42c0,3.313-2.687,6-6,6H6c-3.313,0-6-2.687-6-6V6 c0-3.313,2.687-6,6-6h36c3.313,0,6,2.687,6,6V42z'
                />
                <g>
                    <g>
                        <path
                            fill='#fff'
                            d='M15.731,11.633c-1.608,0-2.658,1.083-2.625,2.527c-0.033,1.378,1.018,2.494,2.593,2.494 c1.641,0,2.691-1.116,2.691-2.494C18.357,12.716,17.339,11.633,15.731,11.633z M13.237,35.557h4.988V18.508h-4.988V35.557z M31.712,18.748c-1.595,0-3.222-0.329-4.956,2.36h-0.099l-0.087-2.599h-4.417c0.065,1.411,0.074,3.518,0.074,5.52v11.529h4.988 v-9.854c0-0.46,0.065-0.919,0.196-1.248c0.328-0.919,1.149-1.871,2.527-1.871c1.805,0,2.527,1.411,2.527,3.479v9.494h4.988V25.439 C37.455,20.713,34.993,18.748,31.712,18.748z'
                        />
                    </g>
                </g>
            </svg>
        </a>

        <a target='blank' href={socialLinks[2].url} title={socialLinks[2].name}>
            <svg
                className='social-icon'
                data-icon='twitter'
                viewBox='0 0 32 32'
                style={{ fill: '#2D3539' }}>
                <title>{socialLinks[2].name}</title>
                <path d='M2 4 C6 8 10 12 15 11 A6 6 0 0 1 22 4 A6 6 0 0 1 26 6 A8 8 0 0 0 31 4 A8 8 0 0 1 28 8 A8 8 0 0 0 32 7 A8 8 0 0 1 28 11 A18 18 0 0 1 10 30 A18 18 0 0 1 0 27 A12 12 0 0 0 8 24 A8 8 0 0 1 3 20 A8 8 0 0 0 6 19.5 A8 8 0 0 1 0 12 A8 8 0 0 0 3 13 A8 8 0 0 1 2 4' />
            </svg>
        </a>
    </div>
)

export default Social
