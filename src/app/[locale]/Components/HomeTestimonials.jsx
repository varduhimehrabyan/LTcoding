import Aos from 'aos';
import { useTranslations } from 'next-intl';
import Image from 'next/image';
import React, { useEffect } from 'react';

export default function HomeTestimonials() {
    const tHomeTestimonials = useTranslations("HomeTestimonials");

    useEffect(() => {
        Aos.init({
            duration: 800,
            once: true,
        });
    }, []);

    const items = [
        {
            id: 1,
            letter: tHomeTestimonials("item1.letter"),
            name: tHomeTestimonials("item1.name"),
            testimonial: tHomeTestimonials("item1.testimonial"),
        },
        {
            id: 2,
            letter: tHomeTestimonials("item2.letter"),
            name: tHomeTestimonials("item2.name"),
            testimonial: tHomeTestimonials("item2.testimonial"),
        },
        {
            id: 3,
            letter: tHomeTestimonials("item3.letter"),
            name: tHomeTestimonials("item3.name"),
            testimonial: tHomeTestimonials("item3.testimonial"),
        },
    ];

    return (
        <div className="w-full py-12">
            <p
                data-aos="fade-up"
                data-aos-delay="200"
                className="text-2xl md:text-5xl font-semibold text-white md:text-center mt-4 md:mt-12"
            >
                {tHomeTestimonials("description1")}
            </p>
            <div className="grid md:grid-cols-3 grid-cols-1 gap-6 mt-8">
                {items.map((item) => (
                    <div
                        key={item.id}
                        data-aos="fade-up"
                        data-aos-delay={200 * item.id}
                        className="bg-white/10 flex flex-col gap-4 p-6 rounded-2xl"
                    >
                        <div className='flex gap-4'>
                            <div className='w-16 h-16 font-bold text-4xl bg-white rounded-full text-colorBlue flex items-center justify-center'>
                                {item.letter}
                            </div>
                            <div className='flex flex-col gap-2'>
                                <p className='font-bold text-lg md:text-2xl text-white'>{item.name}</p>
                                <Image
                                    src="/Icons/stars.png"
                                    alt='stars'
                                    width={100}
                                    height={20}
                                />
                            </div>
                        </div>
                        <p className='text-white md:text-base text-sm'>
                            {item.testimonial}
                        </p>
                    </div>
                ))}
            </div>
        </div>
    );
}
