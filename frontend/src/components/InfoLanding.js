
const InfoLanding = (props) => {
    const side = props.side;
    return(
        <>
            {side === "left" && (
            <section className="flex max-sm:flex-col justify-end snap-center h-screen w-full bg-beingproductive bg-[length:50%] max-sm:bg-[length:100%] bg-no-repeat bg-left-bottom">
                <section className="w-[50%] max-sm:w-full h-full max-sm:flex max-sm:justify-center max-sm:items-center">
                    <main className="w-[90%] h-[90%] flex flex-col justify-center">
                        <h2 className="max-sm:text-4xl 2xl:text-7xl xl:text-6xl lg:text-6xl md:text-4xl sm:text-5xl font-bold tracking-widest">Let your creativity spread!</h2>
                        <p className="max-sm:text-xs max-sm:mr-[3%] tracking-tighter 2xl:text-xl xl:text-xl lg:text-lg md:text-base sm:text-base text-[rgba(245,245,245,.85)]">Lorem ipsum dolor sit amet, consectetur adipisicing elit. Optio, tempora dolor. Tempora iusto delectus, ipsam quo quae architecto, nisi vero obcaecati, error molestiae fugit facilis sapiente odit voluptate. Dolore rem laboriosam dolores corporis, dicta, veniam cupiditate illum sapiente mollitia iusto est consequatur? Doloremque facere a dolorem at quisquam officia odio quas ipsum laboriosam ut. Similique, tempora. Enim eum nulla accusamus, error rem sed dignissimos doloribus esse pariatur repellendus, eos nihil assumenda quos ratione cum alias doloremque! Velit harum magni ducimus temporibus saepe! Tenetur recusandae eos necessitatibus nam dolore maiores, deserunt saepe consequuntur atque aut! Eligendi sint amet fugiat quas dolore.</p>
                    </main>
                </section>
            </section>
          )}
            {side === "right" && (
            <section className="flex max-sm:flex-col justify-start snap-center h-screen w-full bg-relax bg-[length:50%] max-sm:bg-[length:100%] bg-no-repeat bg-right-bottom">
                <section className="w-[50%] max-sm:w-full h-full max-sm:flex max-sm:justify-center max-sm:items-center">
                    <main className="w-[90%] 2xl:ml-[10%] xl:ml-[10%] lg:ml-[10%] md:ml-[10%] h-[90%] flex flex-col justify-center">
                        <h2 className="max-sm:text-4xl 2xl:text-7xl xl:text-6xl lg:text-6xl md:text-4xl sm:text-5xl font-bold tracking-widest">Do your job with relaxedness!</h2>
                        <p className="max-sm:text-xs max-sm:mr-[3%] tracking-tighter 2xl:text-xl xl:text-xl lg:text-lg md:text-base sm:text-base text-[rgba(245,245,245,.85)]">Lorem ipsum dolor sit amet, consectetur adipisicing elit. Optio, tempora dolor. Tempora iusto delectus, ipsam quo quae architecto, nisi vero obcaecati, error molestiae fugit facilis sapiente odit voluptate. Dolore rem laboriosam dolores corporis, dicta, veniam cupiditate illum sapiente mollitia iusto est consequatur? Doloremque facere a dolorem at quisquam officia odio quas ipsum laboriosam ut. Similique, tempora. Enim eum nulla accusamus, error rem sed dignissimos doloribus esse pariatur repellendus, eos nihil assumenda quos ratione cum alias doloremque! Velit harum magni ducimus temporibus saepe! Tenetur recusandae eos necessitatibus nam dolore maiores, deserunt saepe consequuntur atque aut! Eligendi sint amet fugiat quas dolore.</p>
                    </main>
                </section>
            </section>
            )}
        </>
    )

}
export default InfoLanding;