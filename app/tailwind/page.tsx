export default function Tailwind() {
    return (
        <main>
            {/*======================================================================================================*/}
            {/* Exemplo 1                                                                                            */}

            {/*<div className="grid grid-cols-[60%_1fr_1fr] p-[20px] gap-[20px] ">*/}
            {/*<div className="grid grid-cols-[500px_1fr_1fr] p-[20px] gap-[20px] ">*/}
            <div className="grid grid-cols-3 p-[20px] gap-[20px] ">
                <div className="bg-mygray p-5 row-span-2 text-[1.1rem] leading-[1.7] grid grid-cols-1 items-center">
                    <p>1. Lorem ipsum dolor sit amet consectetur adipisicing elit. Quibusdam suscipit tempore dolorum
                        molestias ut animi. Debitis eveniet, excepturi temporibus perspiciatis placeat ipsam expedita
                        minus facilis velit, optio tenetur. Minus, accusamus.</p>
                </div>
                <div className="bg-mygray p-5 text-[0.77rem] leading-[1.7]">
                    <p>2. Lorem ipsum dolor sit amet consectetur adipisicing elit. Quibusdam suscipit tempore dolorum
                        molestias ut animi. Debitis eveniet, excepturi temporibus perspiciatis placeat ipsam expedita
                        minus facilis velit, optio tenetur. Minus, accusamus.</p>
                </div>
                <div className="bg-mygray p-5 text-[0.77rem] leading-[1.7]">
                    <p>3. Lorem ipsum dolor sit amet consectetur adipisicing elit. Quibusdam suscipit tempore dolorum
                        molestias ut animi. Debitis eveniet, excepturi temporibus perspiciatis placeat ipsam expedita
                        minus facilis velit, optio tenetur. Minus, accusamus.</p>
                </div>
                <div className="bg-mygray p-5 text-[0.77rem] leading-[1.7]">
                    <p>4. Lorem ipsum dolor sit amet consectetur adipisicing elit. Quibusdam suscipit tempore dolorum
                        molestias ut animi. Debitis eveniet, excepturi temporibus perspiciatis placeat ipsam expedita
                        minus facilis velit, optio tenetur. Minus, accusamus.</p>
                </div>
                <div className="bg-mygray p-5 text-[0.77rem] leading-[1.7]">
                    <p>5. Lorem ipsum dolor sit amet consectetur adipisicing elit. Quibusdam suscipit tempore dolorum
                        molestias ut animi. Debitis eveniet, excepturi temporibus perspiciatis placeat ipsam expedita
                        minus facilis velit, optio tenetur. Minus, accusamus.</p>
                </div>
                {/*<div className="bg-amber-50 p-5 text-xs">*/}
                {/*    <p>6. Lorem ipsum dolor sit amet consectetur adipisicing elit. Quibusdam suscipit tempore dolorum*/}
                {/*        molestias ut animi. Debitis eveniet, excepturi temporibus perspiciatis placeat ipsam expedita*/}
                {/*        minus facilis velit, optio tenetur. Minus, accusamus.</p>*/}
                {/*</div>*/}
            </div>

            {/*======================================================================================================*/}
            {/* Exemplo 2                                                                                            */}

            <div className="bg-[#dedeff] max-w-[900px] h-[300px] mx-auto mb-[20px] grid">
                <div className="mx-auto my-auto text-[3rem] text-[#7171af]">Hello</div>
            </div>

            {/*======================================================================================================*/}
            {/* Exemplo 3                                                                                            */}


        </main>
    )
}
