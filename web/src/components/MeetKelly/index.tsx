import Kelly from '../../assets/Kelly.png'
import meetKellyIcon from '../../assets/meetkellyicon.svg'

function MeetKelly() {
    return (
        <div className='bg-bege-100 pt-20 lg:pb-40'>
            <div className='container mx-auto w-10/12'>
                <h1 className='text-center text-h1 text-rosa-200 font-semibold md:mb-12'>Conheça a Kelly</h1>
                <img src={Kelly} alt="Imagem da Kelly" className='mx-auto my-4 w-8/12 md:w-3/12 md:hidden'/>
                <div className='flex flex-col gap-5 items-center md:justify-between md:flex-row md:items-stretch'>
                    <div className='px-8 md:w-9/12 max-w-6xl bg-[#FFFFFF] rounded-[30px] flex flex-col justify-center gap-9 md:mx-0 md:pb-0 relative'>
                        <h2 className='font-semibold italic leading-9 text-h4 mt-7'>Olá, meu nome é Kelly!</h2>
                        <p className='leading-9 text-h4'>
                            Sou artesã já faz dez anos. Iniciei com cartonagem, mas depois de um tempo começei a fazer laços e fiquei apaixonada
                            por trabalhar com eles! Em seguida, comecei a fazer tiaras, que foram um sucesso! As bordadas à mão são as preferidas
                            das minhas clientes, tanto das adultas, como das bebês. É uma alegria imensa quando as mamães satisfeitas me
                            enviam as fotos dos looks fofos de suas lindas filhinhas após receberem as encomendas. Maravilhosas demais! Viver
                            de arte no nosso país é muito difícil, principalmente durante esse período de pandemia, mas o desafio me motiva.
                            Sou muito grata pelo reconhecimento e incentivo de vocês! Acompanhem minhas páginas para mais novidades,
                            feitas sempre com muito capricho e muito amor!
                        </p>
                        <img src={meetKellyIcon} alt="" className='w-[85px] absolute -right-6 -bottom-12 hidden lg:inline mr-12' />
                    </div>
                    <div>
                        <img src={Kelly} alt="Imagem da Kelly" className='hidden md:flex object-cover'/>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default MeetKelly