import React, { useState, useRef, useEffect } from 'react';
import { Play, Pause, Maximize, Minimize } from 'lucide-react';
import mp4video from '../../assets/Arony farm Hampi Highlands.mp4';
import leafgrn from '../../assets/leaf-grn.png'

const Video = () => {
    const [isPlaying, setIsPlaying] = useState(false);
    const [isFullScreen, setIsFullScreen] = useState(false);
    const [currentTime, setCurrentTime] = useState(0);
    const [duration, setDuration] = useState(0);

    const videoRef = useRef(null);

    const togglePlay = () => {
        if (!videoRef.current) return;
        if (isPlaying) {
            videoRef.current.pause();
        } else {
            videoRef.current.play();
        }
        setIsPlaying(!isPlaying);
    };

    const toggleFullScreen = () => {
        if (!videoRef.current) return;
        if (!isFullScreen) {
            if (videoRef.current.requestFullscreen) {
                videoRef.current.requestFullscreen();
            }
        } else {
            if (document.exitFullscreen) {
                document.exitFullscreen();
            }
        }
        setIsFullScreen(!isFullScreen);
    };

    const handleTimeUpdate = () => {
        setCurrentTime(videoRef.current.currentTime);
    };

    const handleProgressChange = (e) => {
        const time = (e.target.value / 100) * duration;
        videoRef.current.currentTime = time;
        setCurrentTime(time);
    };

    useEffect(() => {
        const video = videoRef.current;
        const handleLoaded = () => setDuration(video.duration);

        video.addEventListener('loadedmetadata', handleLoaded);
        video.addEventListener('timeupdate', handleTimeUpdate);

        return () => {
            video.removeEventListener('loadedmetadata', handleLoaded);
            video.removeEventListener('timeupdate', handleTimeUpdate);
        };
    }, []);

    const formatTime = (time) => {
        const minutes = Math.floor(time / 60);
        const seconds = Math.floor(time % 60);
        return `${minutes}:${seconds < 10 ? '0' : ''}${seconds}`;
    };

    return (
        <div className="bg-gray-50 py-8 md:py-12 lg:py-16 px-4 md:px-6 lg:px-8">
            <div className="max-w-7xl mx-auto">
                <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 lg:gap-10 items-start">
                    {/* Left Content Section */}
                    <div className="space-y-4 md:space-y-6">
                        <div className="flex items-center gap-2 border border-gray-300 rounded-full px-4 py-2 hover:border-green-500 transition-colors w-fit">
                            <img src={leafgrn} alt="leaf icon" className="w-5 h-5 object-contain" />
                            <span className="text-black text-[15px] sm:text-[16px] font-medium">
                                Farm at a Glance
                            </span>
                        </div>

                        <h1 className="text-[34px] md:text-[34px] lg:text-[34px] font-medium text-black leading-tight">
                            Farm at a glance
                        </h1>

                        <p className="text-[#585858] text-justify text-[16px] md:text-[16px] leading-relaxed">
                            Lorem ipsum dolor sit amet consectetur. Nunc massa pharetra in lectus augue quis. Magna a
                            volutpat duis sed sit elementum a bibendum. Tellus a tortor neque. Morbi ut blandit ultrices
                            duis. Scelerisque tempus habitant semper arcu euismod sed fringilla feugiat. Porttitor feugiat
                            faucibus orci nibh.
                        </p>
                    </div>

                    {/* Right Video Section */}
                    <div className="relative w-full group">
                        <div className="relative aspect-video bg-gray-300 rounded-2xl overflow-hidden shadow-lg">
                            {/* Video Element */}
                            <video
                                ref={videoRef}
                                className="w-full h-full object-cover rounded-2xl cursor-pointer"
                                onClick={togglePlay}
                                onEnded={() => setIsPlaying(false)}
                            >
                                <source src={mp4video} type="video/mp4" />
                                Your browser does not support the video tag.
                            </video>

                            {/* Play Overlay */}
                            {!isPlaying && (
                                <div
                                    className="absolute inset-0 flex items-center justify-center pointer-events-none"
                                >
                                    <div
                                        className="bg-green-500 hover:bg-green-600 transition-all duration-300 rounded-full p-5 md:p-6 shadow-lg transform hover:scale-110 pointer-events-auto cursor-pointer"
                                        onClick={togglePlay}
                                    >
                                        <Play className="w-7 h-7 md:w-8 md:h-8 text-white fill-white" />
                                    </div>
                                </div>
                            )}

                            {/* Controls (hover) */}
                            <div className="absolute bottom-0 left-0 right-0 opacity-0 group-hover:opacity-100 transition-opacity duration-300 p-3 md:p-4 flex items-center gap-2 md:gap-3 bg-gradient-to-t from-black/50 to-transparent">
                                {/* Play/Pause */}
                                <button
                                    onClick={togglePlay}
                                    className="bg-white/90 hover:bg-white rounded-full p-2 transition-all"
                                >
                                    {isPlaying ? <Pause className="w-4 h-4 md:w-5 md:h-5 text-gray-900" /> : <Play className="w-4 h-4 md:w-5 md:h-5 text-gray-900" />}
                                </button>

                                {/* Time */}
                                <span className="text-white text-xs md:text-sm">{formatTime(currentTime)} / {formatTime(duration)}</span>

                                {/* Progress */}
                                <input
                                    type="range"
                                    min={0}
                                    max={100}
                                    value={duration ? (currentTime / duration) * 100 : 0}
                                    onChange={handleProgressChange}
                                    className="w-full h-1 rounded-lg accent-green-500"
                                />

                                {/* Fullscreen (hide on small screens) */}
                                <button
                                    onClick={toggleFullScreen}
                                    className="bg-white/90 hover:bg-white rounded-full p-2 transition-all hidden md:block"
                                >
                                    {isFullScreen ? <Minimize className="w-5 h-5 text-gray-900" /> : <Maximize className="w-5 h-5 text-gray-900" />}
                                </button>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Video;
