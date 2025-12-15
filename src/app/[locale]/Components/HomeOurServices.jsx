import Aos from 'aos';
import { useTranslations } from 'next-intl';
import React, { useEffect, useState, useRef } from 'react';
import Image from 'next/image';
import ScheduleButton from '@/Components/ScheduleButton';

export default function HomeOurServices() {
    const tHomeOurServices = useTranslations("HomeOurServices");
    const [currentIndex, setCurrentIndex] = useState(0);
    const [isAnimating, setIsAnimating] = useState(false);
    const [direction, setDirection] = useState('down');
    const containerRef = useRef(null);

    const items = [
        { id: 1, img: "/HomeOurServices/item1.png", title: tHomeOurServices("item1.title"), description: tHomeOurServices("item1.description"), count: '01' },
        { id: 2, img: "/HomeOurServices/item2.png", title: tHomeOurServices("item2.title"), description: tHomeOurServices("item2.description"), count: '02' },
        { id: 3, img: "/HomeOurServices/item3.png", title: tHomeOurServices("item3.title"), description: tHomeOurServices("item3.description"), count: '03' },
        { id: 4, img: "/HomeOurServices/item4.png", title: tHomeOurServices("item4.title"), description: tHomeOurServices("item4.description"), count: '04' },
        { id: 5, img: "/HomeOurServices/item5.png", title: tHomeOurServices("item5.title"), description: tHomeOurServices("item5.description"), count: '05' },
        { id: 6, img: "/HomeOurServices/item6.png", title: tHomeOurServices("item6.title"), description: tHomeOurServices("item6.description"), count: '06' },
        { id: 7, img: "/HomeOurServices/item7.png", title: tHomeOurServices("item7.title"), description: tHomeOurServices("item7.description"), count: '07' },
        { id: 8, img: "/HomeOurServices/item8.png", title: tHomeOurServices("item8.title"), description: tHomeOurServices("item8.description"), count: '08' },
    ];

    const currentItem = items[currentIndex];

    useEffect(() => {
        Aos.init({ duration: 800, once: true });

        const handleScroll = (e) => {
            e.preventDefault();
            if (isAnimating) return;

            const delta = e.deltaY;
            if (delta > 0 && currentIndex < items.length - 1) {
                setDirection('down');
                changeItem(currentIndex + 1);
            } else if (delta < 0 && currentIndex > 0) {
                setDirection('up');
                changeItem(currentIndex - 1);
            }
        };

        const changeItem = (newIndex) => {
            if (newIndex === currentIndex) return;
            setIsAnimating(true);
            setTimeout(() => setCurrentIndex(newIndex), 200);
            setTimeout(() => setIsAnimating(false), 800);
        };

        const container = containerRef.current;
        if (container) {
            container.addEventListener('wheel', handleScroll, { passive: false });
        }

        return () => {
            if (container) {
                container.removeEventListener('wheel', handleScroll);
            }
        };
    }, [currentIndex, isAnimating]);

    return (
        <div className="w-full md:py-12">
            {/* Header Section */}
            <div className="mb-12">
                <h2 data-aos="fade-up" data-aos-delay="100" className="text-lg font-bold md:text-center text-white">
                    {tHomeOurServices("title")}
                </h2>
                <p data-aos="fade-up" data-aos-delay="200" className="text-2xl md:text-5xl font-semibold text-white md:text-center mt-4 md:mt-12">
                    {tHomeOurServices("description")}
                </p>
                <p data-aos="fade-up" data-aos-delay="300" className="text-white md:text-center mt-2 md:mt-4">
                    {tHomeOurServices("description1")}
                </p>
                <p data-aos="fade-up" data-aos-delay="400" className="text-white md:text-center mt-4 md:mt-6">
                    {tHomeOurServices("description2")}
                </p>
            </div>

            {/* Desktop Layout (progress bar + single item) */}
            <div ref={containerRef} className="hidden md:flex min-h-[600px] items-start justify-start p-8 gap-12">
                {/* Progress Bar */}
                <div className="flex flex-col items-center">
                    {items.map((_, index) => (
                        <React.Fragment key={index}>
                            <div
                                onClick={() => {
                                    if (!isAnimating && index !== currentIndex) {
                                        setDirection(index > currentIndex ? "down" : "up");
                                        setCurrentIndex(index);
                                    }
                                }}
                                className={`w-6 h-6 rounded-full cursor-pointer transition-all duration-500 transform
                                    ${index === currentIndex
                                        ? "bg-white border-4 border-[#404040] scale-110 shadow-lg"
                                        : index < currentIndex
                                            ? "bg-white border-4 border-white"
                                            : "bg-[#404040] border-4 border-[#404040]"
                                    }`}
                            />
                            {index < items.length - 1 && (
                                <div
                                    className={`w-1 h-8 transition-colors duration-500 
                                        ${index < currentIndex ? "bg-white" : "bg-[#404040]"}`}
                                />
                            )}
                        </React.Fragment>
                    ))}
                </div>

                {/* Main Content Area */}
                <div className="flex-1">
                    <div className="flex justify-between">
                        <div
                            className={`flex gap-4 transition-all duration-500 ease-in-out ${isAnimating
                                ? direction === "down"
                                    ? "opacity-0 translate-y-8"
                                    : "opacity-0 -translate-y-8"
                                : "opacity-100 translate-y-0"
                                }`}
                        >
                            <div className="flex flex-col">
                                <p className="text-white text-lg font-bold">{currentItem.count}</p>
                                <p className="text-white text-2xl font-semibold">{currentItem.title}</p>
                                <p className="text-white max-w-md">{currentItem.description}</p>
                            </div>
                        </div>
                        <Image
                            src={currentItem.img}
                            alt={currentItem.title}
                            width={400}
                            height={400}
                            className={`transition-all duration-500 ease-in-out ${isAnimating
                                ? direction === "down"
                                    ? "translate-y-10 opacity-0"
                                    : "-translate-y-10 opacity-0"
                                : "translate-y-0 opacity-100"
                                } rounded-lg`}
                        />
                    </div>
                </div>
            </div>

            {/* Mobile Layout (simple flex col list) */}
            <div className="flex flex-col gap-10 md:hidden px-4">
                {items.map((item, index) => (
                    <div
                        key={item.id}
                        data-aos="fade-up"
                        data-aos-delay={index * 200}
                    >
                        <Image
                            src={item.img}
                            alt={item.title}
                            width={124}
                            height={117}
                            className="mb-4 w-full rounded-lg"
                        />
                        <div className="flex flex-col">
                            <p className="text-white text-lg font-bold">{item.count}</p>
                            <p className="text-white text-lg font-semibold">{item.title}</p>
                            <p className="text-white text-sm max-w-md">{item.description}</p>
                        </div>
                    </div>
                ))}
            </div>

            <div data-aos="fade-up" data-aos-delay="400" className='flex md:justify-center py-4'>
                <ScheduleButton text={tHomeOurServices("buttonText")} />
            </div>
        </div>
    );
}
