export default function Tailwind() {
    return (
        <main>
            {/*======================================================================================================*/}
            {/* Exemplo 1                                                                                            */}

            {/*<div className="grid grid-cols-[60%_1fr_1fr] p-[20px] gap-[20px] ">*/}
            {/*<div className="grid grid-cols-[500px_1fr_1fr] p-[20px] gap-[20px] ">*/}
            <div className="grid grid-cols-3 p-[20px] gap-[20px] ">
                <div className="bg-mygray p-5 row-span-2 text-[1.1rem] leading-[1.7] grid items-center">
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

            <div
                className="bg-[#ffd382] p-[20px] grid grid-cols-[minmax(auto,_900px)] justify-center leading-[1.7] text-[#705626]">
                <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Ullam ab sed odio dicta tempora commodi
                    possimus nulla, unde officia placeat. Sed quibusdam numquam nulla molestiae alias ipsa distinctio
                    dicta iste!</p>
            </div>

            {/*======================================================================================================*/}
            {/* Exemplo 4                                                                                            */}

            <div className="grid max-w-[700px] mx-auto my-[20px]">
                <img className="col-start-1 row-start-1"
                     src="https://images.unsplash.com/photo-1508948956644-0017e845d797?crop=entropy&cs=srgb&fm=jpg&ixid=MnwxNDU4OXwwfDF8cmFuZG9tfHx8fHx8fHx8MTYyMzY4Nzc3Mg&ixlib=rb-1.2.1&q=85"
                     alt="A criminally cute dog."/>
                <div className="col-start-1 row-start-1 self-end
                                text-[#fff] bg-[#0000004f] p-[20px] text-[0.85rem] leading-[1.7]">
                    <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Exercitationem eos ad dolores! Ipsum
                        vitae rem eaque iusto pariatur. Vero ad dolorem optio totam eius eaque deleniti animi culpa?
                        Laboriosam, quae.</p>
                </div>
            </div>

            {/*======================================================================================================*/}
            {/* Exemplo 5                                                                                            */}

            <div className="grid grid-cols-[1fr_2.5fr]">
                <div className="bg-[#7171af] text-[#fff] col-span-2 p-[20px]">This is the header</div>

                <div className="bg-[#ddd] text-[#999] row-span-2 p-[20px] text-[0.8rem]">
                    <p>This sidebar has useful links and content.</p>
                    <p>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Nisi nobis sed tenetur officiis qui
                        libero mollitia, sint aspernatur quibusdam eius ea quas! At facere itaque nesciunt praesentium,
                        vel repellat incidunt!</p>
                    <p>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Nisi nobis sed tenetur officiis qui
                        libero mollitia, sint aspernatur quibusdam eius ea quas! At facere itaque nesciunt praesentium,
                        vel repellat incidunt!</p>
                    <p>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Nisi nobis sed tenetur officiis qui
                        libero mollitia, sint aspernatur quibusdam eius ea quas! At facere itaque nesciunt praesentium,
                        vel repellat incidunt!</p>
                    <p>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Nisi nobis sed tenetur officiis qui
                        libero mollitia, sint aspernatur quibusdam eius ea quas! At facere itaque nesciunt praesentium,
                        vel repellat incidunt!</p>
                    <p>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Nisi nobis sed tenetur officiis qui
                        libero mollitia, sint aspernatur quibusdam eius ea quas! At facere itaque nesciunt praesentium,
                        vel repellat incidunt!</p>

                </div>

                <div className="p-[20px] leading-[1.7]">
                    <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Corrupti, laborum sunt! Quisquam unde,
                        quae rerum harum adipisci aliquid quos molestiae quam, quas sequi tenetur repellat explicabo
                        fuga dicta, repudiandae ipsam.</p>

                </div>

                <div className="bg-[#4d4d4d] text-[#fff] self-end p-[15px] text-[0.75rem]">&copy; 2021</div>
            </div>

            {/*======================================================================================================*/}
            {/* Exemplo 6                                                                                            */}

            <div className="grid mx-auto my-[20px] grid-cols-[repeat(auto-fit,_minmax(180px,_1fr))] gap-[20px] max-w-[1100px]">
                <div className="p-[20px] bg-[#ccf7e6] text-[#5a917b] text-[0.77rem] leading[1.7]">
                    <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Nihil doloribus magni soluta in velit
                        neque, at explicabo ipsam ea placeat itaque consequatur deserunt officiis quam! Accusamus
                        corporis repellendus nihil ipsa.</p>
                </div>
                <div className="p-[20px] bg-[#ccf7e6] text-[#5a917b] text-[0.77rem] leading-[1.7]">
                    <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Nihil doloribus magni soluta in velit
                        neque, at explicabo ipsam ea placeat itaque consequatur deserunt officiis quam! Accusamus
                        corporis repellendus nihil ipsa.</p>
                </div>
                <div className="p-[20px] bg-[#ccf7e6] text-[#5a917b] text-[0.77rem] leading-[1.7]">
                    <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Nihil doloribus magni soluta in velit
                        neque, at explicabo ipsam ea placeat itaque consequatur deserunt officiis quam! Accusamus
                        corporis repellendus nihil ipsa.</p>
                </div>
                <div className="p-[20px] bg-[#ccf7e6] text-[#5a917b] text-[0.77rem] leading-[1.7]">
                    <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Nihil doloribus magni soluta in velit
                        neque, at explicabo ipsam ea placeat itaque consequatur deserunt officiis quam! Accusamus
                        corporis repellendus nihil ipsa.</p>
                </div>
                <div className="p-[20px] bg-[#ccf7e6] text-[#5a917b] text-[0.77rem] leading-[1.7]">
                    <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Nihil doloribus magni soluta in velit
                        neque, at explicabo ipsam ea placeat itaque consequatur deserunt officiis quam! Accusamus
                        corporis repellendus nihil ipsa.</p>
                </div>
                <div className="p-[20px] bg-[#ccf7e6] text-[#5a917b] text-[0.77rem] leading-[1.7]">
                    <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Nihil doloribus magni soluta in velit
                        neque, at explicabo ipsam ea placeat itaque consequatur deserunt officiis quam! Accusamus
                        corporis repellendus nihil ipsa.</p>
                </div>
                <div className="p-[20px] bg-[#ccf7e6] text-[#5a917b] text-[0.77rem] leading-[1.7]">
                    <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Nihil doloribus magni soluta in velit
                        neque, at explicabo ipsam ea placeat itaque consequatur deserunt officiis quam! Accusamus
                        corporis repellendus nihil ipsa.</p>
                </div>
                <div className="p-[20px] bg-[#ccf7e6] text-[#5a917b] text-[0.77rem] leading-[1.7]">
                    <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Nihil doloribus magni soluta in velit
                        neque, at explicabo ipsam ea placeat itaque consequatur deserunt officiis quam! Accusamus
                        corporis repellendus nihil ipsa.</p>
                </div>
                <div className="p-[20px] bg-[#ccf7e6] text-[#5a917b] text-[0.77rem] leading-[1.7]">
                    <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Nihil doloribus magni soluta in velit
                        neque, at explicabo ipsam ea placeat itaque consequatur deserunt officiis quam! Accusamus
                        corporis repellendus nihil ipsa.</p>
                </div>
                <div className="p-[20px] bg-[#ccf7e6] text-[#5a917b] text-[0.77rem] leading-[1.7]">
                    <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Nihil doloribus magni soluta in velit
                        neque, at explicabo ipsam ea placeat itaque consequatur deserunt officiis quam! Accusamus
                        corporis repellendus nihil ipsa.</p>
                </div>
                <div className="p-[20px] bg-[#ccf7e6] text-[#5a917b] text-[0.77rem] leading-[1.7]">
                    <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Nihil doloribus magni soluta in velit
                        neque, at explicabo ipsam ea placeat itaque consequatur deserunt officiis quam! Accusamus
                        corporis repellendus nihil ipsa.</p>
                </div>
                <div className="p-[20px] bg-[#ccf7e6] text-[#5a917b] text-[0.77rem] leading-[1.7]">
                    <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Nihil doloribus magni soluta in velit
                        neque, at explicabo ipsam ea placeat itaque consequatur deserunt officiis quam! Accusamus
                        corporis repellendus nihil ipsa.</p>
                </div>
            </div>


        </main>
    )
}
