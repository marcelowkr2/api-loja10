import React from 'react';
import Quote1 from '../../assets/Quote1.svg'
import Quote2 from '../../assets/Quote2.svg'

function Avaliations(){
  return (
    <div className='bg-bege-100 m-auto py-16'>
        <p className="text-h1 font-semibold text-center text-rosa-200 py-2">Avaliações</p>
        <div className='w-10/12 m-auto gap-14 flex flex-col md:flex-row py-4'>
            <div>
                <div className='py-6 w-[60px] md:w-full'><img src={Quote1} alt="" /></div>
                <p className='text-h4'>Nossa, sem ver de perto, estava apaixonada, imagina agora vendo, pegando... Muito lindos seus trabalhos, de verdade!</p>
                <div className='flex justify-between'>
                    <p className='name text-[22px] text-[#B57A73] mt-10'>
                        Gisele
                    </p>
                    <img className='w-[60px] md:w-[82px]' src={Quote2} alt="" />
                </div>
            </div>
            <div>
                <div className='py-6 w-[60px] md:w-full'><img src={Quote1} alt="" /></div>
                <p className='text-h4'>Parabéns pelo seu trabalho! Que dom vc tem nas mãos, vc faz obras de arte! Muito agradecida por tudo, continue assim!!</p>
                <div className='flex justify-between'>
                    <p className='name text-[22px] text-[#B57A73] mt-10'>
                        Isabeli
                    </p>
                    <img className='w-[60px] md:w-[82px]' src={Quote2} alt="" />
                </div>
            </div>
            <div>
                <div className='py-6 w-[60px] md:w-full'><img src={Quote1} alt="" /></div>
                <p className='text-h4'>Chegou minha encomenda, está tudo perfeito! Simplesmente maravilhoso!! Amei!!! Obrigada pela atenção e dedicação. Mãos de fada!</p>
                <div className='flex justify-between'>
                    <p className='text-[22px] text-[#B57A73] mt-10'>
                        Alessandra
                    </p>
                    <img className='w-[60px] md:w-[82px]' src={Quote2} alt="" />
                </div>
            </div>
        </div>
    </div>
  );
}

export default Avaliations;
