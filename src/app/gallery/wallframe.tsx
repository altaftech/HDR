"use client"

import Image from "next/image";
import "./page.css"
import { useState } from 'react';

interface ImageData {
    src: string;
    alt: string;
    width: number;
    height: number;
}

const Wallframe: React.FC = () => {
    const [popupVisible, setPopupVisible] = useState<boolean>(false);
    const [selectedImage, setSelectedImage] = useState<string>('');
    const [tooltipContent, setTooltipContent] = useState<string>('');

    const showTooltip = (image: ImageData) => {
        setTooltipContent(`${image.width} x ${image.height} px`);
    };

    const hideTooltip = () => {
        setTooltipContent('');
    };

    const openPopup = (src: string) => {
        setSelectedImage(src);
        setPopupVisible(true);
    };

    const closePopup = () => {
        setPopupVisible(false);
    };

    const downloadImage = () => {

        const filename = selectedImage.substring(selectedImage.lastIndexOf('/') + 1);

        const anchor = document.createElement('a');
        anchor.href = selectedImage;
        anchor.download = filename;
        anchor.click();
    };
    const printPage = () => {
        window.print();
    };

    const images: ImageData[] = [
        { src: "./Wallpapers/HDR_Wallpaper_001.jpg", alt: "HDR Wallpaper 001", width: 3000, height: 2000 },
        { src: "./Wallpapers/HDR_Wallpaper_002.jpg", alt: "HDR Wallpaper 002", width: 7971, height: 5314 },
        { src: "./Wallpapers/HDR_Wallpaper_003.jpg", alt: "HDR Wallpaper 003", width: 5120, height: 2880 },
        { src: "./Wallpapers/HDR_Wallpaper_004.jpg", alt: "HDR Wallpaper 004", width: 6016, height: 6016 },
        { src: "./Wallpapers/HDR_Wallpaper_005.jpg", alt: "HDR Wallpaper 005", width: 6016, height: 6016 },
        { src: "./Wallpapers/HDR_Wallpaper_006.jpg", alt: "HDR Wallpaper 006", width: 6016, height: 6016 },
        { src: "./Wallpapers/HDR_Wallpaper_007.jpg", alt: "HDR Wallpaper 007", width: 5120, height: 3200 },
        { src: "./Wallpapers/HDR_Wallpaper_008.jpg", alt: "HDR Wallpaper 008", width: 6916, height: 4616 },
        { src: "./Wallpapers/HDR_Wallpaper_009.jpg", alt: "HDR Wallpaper 009", width: 5120, height: 2880 },
        { src: "./Wallpapers/HDR_Wallpaper_010.jpg", alt: "HDR Wallpaper 010", width: 5120, height: 2880 },
        { src: "./Wallpapers/HDR_Wallpaper_011.jpg", alt: "HDR Wallpaper 011", width: 5120, height: 2880 },
        { src: "./Wallpapers/HDR_Wallpaper_012.jpg", alt: "HDR Wallpaper 012", width: 6016, height: 6016 },
        { src: "./Wallpapers/HDR_Wallpaper_013.jpg", alt: "HDR Wallpaper 013", width: 5120, height: 2880 },
        { src: "./Wallpapers/HDR_Wallpaper_014.jpg", alt: "HDR Wallpaper 014", width: 5120, height: 2880 },
        { src: "./Wallpapers/HDR_Wallpaper_015.jpg", alt: "HDR Wallpaper 015", width: 3840, height: 2160 },
        { src: "./Wallpapers/HDR_Wallpaper_016.jpg", alt: "HDR Wallpaper 016", width: 1920, height: 1080 },
        { src: "./Wallpapers/HDR_Wallpaper_017.jpg", alt: "HDR Wallpaper 017", width: 626, height: 417 },
        { src: "./Wallpapers/HDR_Wallpaper_018.jpg", alt: "HDR Wallpaper 018", width: 3840, height: 1633 },
        { src: "./Wallpapers/HDR_Wallpaper_019.jpg", alt: "HDR Wallpaper 019", width: 1920, height: 1080 },
        { src: "./Wallpapers/HDR_Wallpaper_020.jpg", alt: "HDR Wallpaper 020", width: 1920, height: 1080 },
        { src: "./Wallpapers/HDR_Wallpaper_021.jpg", alt: "HDR Wallpaper 021", width: 3000, height: 1688 },
        { src: "./Wallpapers/HDR_Wallpaper_022.jpg", alt: "HDR Wallpaper 022", width: 2560, height: 1440 },
        { src: "./Wallpapers/HDR_Wallpaper_023.jpg", alt: "HDR Wallpaper 023", width: 1920, height: 1080 },
        { src: "./Wallpapers/HDR_Wallpaper_024.jpg", alt: "HDR Wallpaper 024", width: 3840, height: 2160 },
        { src: "./Wallpapers/HDR_Wallpaper_025.jpg", alt: "HDR Wallpaper 025", width: 3840, height: 2160 },
        { src: "./Wallpapers/HDR_Wallpaper_026.jpg", alt: "HDR Wallpaper 026", width: 3840, height: 2160 },
        { src: "./Wallpapers/HDR_Wallpaper_027.jpg", alt: "HDR Wallpaper 027", width: 2560, height: 1440 },
        { src: "./Wallpapers/HDR_Wallpaper_028.jpg", alt: "HDR Wallpaper 028", width: 1920, height: 1148 },
        { src: "./Wallpapers/HDR_Wallpaper_029.jpg", alt: "HDR Wallpaper 029", width: 1920, height: 1080 },
        { src: "./Wallpapers/HDR_Wallpaper_030.jpg", alt: "HDR Wallpaper 030", width: 1920, height: 1080 },
        { src: "./Wallpapers/HDR_Wallpaper_031.jpg", alt: "HDR Wallpaper 031", width: 3840, height: 2160 },
        { src: "./Wallpapers/HDR_Wallpaper_032.jpg", alt: "HDR Wallpaper 032", width: 1920, height: 1080 },
        { src: "./Wallpapers/HDR_Wallpaper_033.jpg", alt: "HDR Wallpaper 033", width: 1920, height: 1080 },
        { src: "./Wallpapers/HDR_Wallpaper_034.jpg", alt: "HDR Wallpaper 034", width: 1920, height: 1080 },
        { src: "./Wallpapers/HDR_Wallpaper_035.jpg", alt: "HDR Wallpaper 035", width: 2000, height: 800 },
        { src: "./Wallpapers/HDR_Wallpaper_036.jpg", alt: "HDR Wallpaper 036", width: 1920, height: 1080 },
        { src: "./Wallpapers/HDR_Wallpaper_037.jpg", alt: "HDR Wallpaper 037", width: 1920, height: 1080 },
        { src: "./Wallpapers/HDR_Wallpaper_038.jpg", alt: "HDR Wallpaper 038", width: 1920, height: 1080 },
        { src: "./Wallpapers/HDR_Wallpaper_039.jpg", alt: "HDR Wallpaper 039", width: 3840, height: 2160 },
        { src: "./Wallpapers/HDR_Wallpaper_040.jpg", alt: "HDR Wallpaper 040", width: 3840, height: 2160 },
        { src: "./Wallpapers/HDR_Wallpaper_041.jpg", alt: "HDR Wallpaper 041", width: 3840, height: 2160 },
        { src: "./Wallpapers/HDR_Wallpaper_042.jpg", alt: "HDR Wallpaper 042", width: 3840, height: 2160 },
        { src: "./Wallpapers/HDR_Wallpaper_043.jpg", alt: "HDR Wallpaper 043", width: 2560, height: 1280 },
        { src: "./Wallpapers/HDR_Wallpaper_044.jpg", alt: "HDR Wallpaper 044", width: 2560, height: 1440 },
        { src: "./Wallpapers/HDR_Wallpaper_045.jpg", alt: "HDR Wallpaper 045", width: 1920, height: 1080 },
        { src: "./Wallpapers/HDR_Wallpaper_046.jpg", alt: "HDR Wallpaper 046", width: 1920, height: 1080 },
        { src: "./Wallpapers/HDR_Wallpaper_047.jpg", alt: "HDR Wallpaper 047", width: 7680, height: 4320 },
        { src: "./Wallpapers/HDR_Wallpaper_048.jpg", alt: "HDR Wallpaper 048", width: 1920, height: 1081 },
        { src: "./Wallpapers/HDR_Wallpaper_049.jpg", alt: "HDR Wallpaper 049", width: 3072, height: 1296 },
        { src: "./Wallpapers/HDR_Wallpaper_050.jpg", alt: "HDR Wallpaper 050", width: 2560, height: 941 },
        { src: "./Wallpapers/HDR_Wallpaper_051.jpg", alt: "HDR Wallpaper 051", width: 1920, height: 1080 },
        { src: "./Wallpapers/HDR_Wallpaper_052.jpg", alt: "HDR Wallpaper 052", width: 2560, height: 1440 },
        { src: "./Wallpapers/HDR_Wallpaper_053.jpg", alt: "HDR Wallpaper 053", width: 3840, height: 2160 },
        { src: "./Wallpapers/HDR_Wallpaper_054.jpg", alt: "HDR Wallpaper 054", width: 2560, height: 1440 },
        { src: "./Wallpapers/HDR_Wallpaper_055.jpg", alt: "HDR Wallpaper 055", width: 1920, height: 1080 },
        { src: "./Wallpapers/HDR_Wallpaper_056.jpg", alt: "HDR Wallpaper 056", width: 3840, height: 2160 },
        { src: "./Wallpapers/HDR_Wallpaper_057.jpg", alt: "HDR Wallpaper 057", width: 3840, height: 2160 },
        { src: "./Wallpapers/HDR_Wallpaper_058.jpg", alt: "HDR Wallpaper 058", width: 3440, height: 1440 },
        { src: "./Wallpapers/HDR_Wallpaper_059.jpg", alt: "HDR Wallpaper 059", width: 3840, height: 2400 },
        { src: "./Wallpapers/HDR_Wallpaper_060.jpg", alt: "HDR Wallpaper 060", width: 3840, height: 2400 },
        { src: "./Wallpapers/HDR_Wallpaper_061.jpg", alt: "HDR Wallpaper 061", width: 1920, height: 1080 },
        { src: "./Wallpapers/HDR_Wallpaper_062.jpg", alt: "HDR Wallpaper 062", width: 1920, height: 1080 },
        { src: "./Wallpapers/HDR_Wallpaper_063.jpg", alt: "HDR Wallpaper 063", width: 3800, height: 2149 },
        { src: "./Wallpapers/HDR_Wallpaper_064.jpg", alt: "HDR Wallpaper 064", width: 1920, height: 1080 },
        { src: "./Wallpapers/HDR_Wallpaper_065.jpg", alt: "HDR Wallpaper 065", width: 1920, height: 1080 },
        { src: "./Wallpapers/HDR_Wallpaper_066.jpg", alt: "HDR Wallpaper 066", width: 3840, height: 2160 },
        { src: "./Wallpapers/HDR_Wallpaper_067.jpg", alt: "HDR Wallpaper 067", width: 3840, height: 2160 },
        { src: "./Wallpapers/HDR_Wallpaper_068.jpg", alt: "HDR Wallpaper 068", width: 3840, height: 2160 },
        { src: "./Wallpapers/HDR_Wallpaper_069.jpg", alt: "HDR Wallpaper 069", width: 3440, height: 1440 },
        { src: "./Wallpapers/HDR_Wallpaper_070.jpg", alt: "HDR Wallpaper 070", width: 3600, height: 2000 },
        { src: "./Wallpapers/HDR_Wallpaper_071.jpg", alt: "HDR Wallpaper 071", width: 15360, height: 4773 },
        { src: "./Wallpapers/HDR_Wallpaper_072.jpg", alt: "HDR Wallpaper 072", width: 3840, height: 1080 },
        { src: "./Wallpapers/HDR_Wallpaper_073.jpg", alt: "HDR Wallpaper 073", width: 3840, height: 2160 },
        { src: "./Wallpapers/HDR_Wallpaper_074.jpg", alt: "HDR Wallpaper 074", width: 3840, height: 2160 },
        { src: "./Wallpapers/HDR_Wallpaper_075.jpg", alt: "HDR Wallpaper 075", width: 1920, height: 1080 },
        { src: "./Wallpapers/HDR_Wallpaper_076.jpg", alt: "HDR Wallpaper 076", width: 3840, height: 2160 },
        { src: "./Wallpapers/HDR_Wallpaper_077.jpg", alt: "HDR Wallpaper 077", width: 3840, height: 2160 },
        { src: "./Wallpapers/HDR_Wallpaper_078.jpg", alt: "HDR Wallpaper 078", width: 10000, height: 4526 },
        { src: "./Wallpapers/HDR_Wallpaper_079.jpg", alt: "HDR Wallpaper 079", width: 2419, height: 1209 },
        { src: "./Wallpapers/HDR_Wallpaper_080.jpg", alt: "HDR Wallpaper 080", width: 3840, height: 2160 },
        { src: "./Wallpapers/HDR_Wallpaper_081.jpg", alt: "HDR Wallpaper 081", width: 4213, height: 1162 },
        { src: "./Wallpapers/HDR_Wallpaper_082.jpg", alt: "HDR Wallpaper 082", width: 1920, height: 1080 },
        { src: "./Wallpapers/HDR_Wallpaper_083.jpg", alt: "HDR Wallpaper 083", width: 4948, height: 2935 },
        { src: "./Wallpapers/HDR_Wallpaper_084.jpg", alt: "HDR Wallpaper 084", width: 3840, height: 2160 },
        { src: "./Wallpapers/HDR_Wallpaper_085.jpg", alt: "HDR Wallpaper 085", width: 7475, height: 2615 },
        { src: "./Wallpapers/HDR_Wallpaper_086.jpg", alt: "HDR Wallpaper 086", width: 3840, height: 2160 },
        { src: "./Wallpapers/HDR_Wallpaper_087.jpg", alt: "HDR Wallpaper 087", width: 2880, height: 1800 },
        { src: "./Wallpapers/HDR_Wallpaper_088.jpg", alt: "HDR Wallpaper 088", width: 3840, height: 2160 },
        { src: "./Wallpapers/HDR_Wallpaper_089.jpg", alt: "HDR Wallpaper 089", width: 7680, height: 4320 },
        { src: "./Wallpapers/HDR_Wallpaper_090.jpg", alt: "HDR Wallpaper 090", width: 3840, height: 2160 },
        { src: "./Wallpapers/HDR_Wallpaper_091.jpg", alt: "HDR Wallpaper 091", width: 1920, height: 1080 },
        { src: "./Wallpapers/HDR_Wallpaper_092.jpg", alt: "HDR Wallpaper 092", width: 1920, height: 1080 },
        { src: "./Wallpapers/HDR_Wallpaper_093.jpg", alt: "HDR Wallpaper 093", width: 3840, height: 2160 },
        { src: "./Wallpapers/HDR_Wallpaper_094.jpg", alt: "HDR Wallpaper 094", width: 1920, height: 1081 },
        { src: "./Wallpapers/HDR_Wallpaper_095.jpg", alt: "HDR Wallpaper 095", width: 1920, height: 1080 },
        { src: "./Wallpapers/HDR_Wallpaper_096.jpg", alt: "HDR Wallpaper 096", width: 3840, height: 2160 },
        { src: "./Wallpapers/HDR_Wallpaper_097.jpg", alt: "HDR Wallpaper 097", width: 1440, height: 900 },
        { src: "./Wallpapers/HDR_Wallpaper_098.jpg", alt: "HDR Wallpaper 098", width: 1920, height: 1400 },
        { src: "./Wallpapers/HDR_Wallpaper_099.jpg", alt: "HDR Wallpaper 099", width: 6408, height: 3871 },
        { src: "./Wallpapers/HDR_Wallpaper_100.jpg", alt: "HDR Wallpaper 100", width: 3840, height: 2160 },
        { src: "./Wallpapers/HDR_Wallpaper_101.jpg", alt: "HDR Wallpaper 101", width: 2560, height: 1440 },
        { src: "./Wallpapers/HDR_Wallpaper_102.jpg", alt: "HDR Wallpaper 102", width: 3840, height: 1080 },
        { src: "./Wallpapers/HDR_Wallpaper_103.jpg", alt: "HDR Wallpaper 103", width: 1920, height: 1080 },
        { src: "./Wallpapers/HDR_Wallpaper_104.jpg", alt: "HDR Wallpaper 104", width: 3840, height: 2560 },
        { src: "./Wallpapers/HDR_Wallpaper_105.jpg", alt: "HDR Wallpaper 105", width: 3840, height: 2160 },
        { src: "./Wallpapers/HDR_Wallpaper_106.jpg", alt: "HDR Wallpaper 106", width: 1920, height: 1080 },
        { src: "./Wallpapers/HDR_Wallpaper_107.jpg", alt: "HDR Wallpaper 107", width: 3840, height: 2160 },
        { src: "./Wallpapers/HDR_Wallpaper_108.jpg", alt: "HDR Wallpaper 108", width: 7680, height: 4320 },
        { src: "./Wallpapers/HDR_Wallpaper_109.jpg", alt: "HDR Wallpaper 109", width: 2255, height: 1080 },
        { src: "./Wallpapers/HDR_Wallpaper_110.jpg", alt: "HDR Wallpaper 110", width: 2560, height: 1440 },
        { src: "./Wallpapers/HDR_Wallpaper_111.jpg", alt: "HDR Wallpaper 111", width: 4310, height: 2425 },
        { src: "./Wallpapers/HDR_Wallpaper_112.jpg", alt: "HDR Wallpaper 112", width: 3840, height: 2400 },
        { src: "./Wallpapers/HDR_Wallpaper_113.jpg", alt: "HDR Wallpaper 113", width: 3840, height: 2160 },
        { src: "./Wallpapers/HDR_Wallpaper_114.jpg", alt: "HDR Wallpaper 114", width: 1920, height: 1080 },
        { src: "./Wallpapers/HDR_Wallpaper_115.jpg", alt: "HDR Wallpaper 115", width: 1920, height: 1080 },
        { src: "./Wallpapers/HDR_Wallpaper_116.jpg", alt: "HDR Wallpaper 116", width: 3840, height: 2160 },
        { src: "./Wallpapers/HDR_Wallpaper_117.jpg", alt: "HDR Wallpaper 117", width: 3840, height: 2160 },
        { src: "./Wallpapers/HDR_Wallpaper_118.jpg", alt: "HDR Wallpaper 118", width: 1920, height: 1080 },
        { src: "./Wallpapers/HDR_Wallpaper_119.jpg", alt: "HDR Wallpaper 119", width: 2880, height: 1800 },
        { src: "./Wallpapers/HDR_Wallpaper_120.jpg", alt: "HDR Wallpaper 120", width: 7680, height: 4320 },
        { src: "./Wallpapers/HDR_Wallpaper_121.jpg", alt: "HDR Wallpaper 121", width: 3500, height: 1750 },
        { src: "./Wallpapers/HDR_Wallpaper_122.jpg", alt: "HDR Wallpaper 122", width: 4800, height: 2400 },
        { src: "./Wallpapers/HDR_Wallpaper_123.jpg", alt: "HDR Wallpaper 123", width: 1920, height: 1080 },
        { src: "./Wallpapers/HDR_Wallpaper_124.jpg", alt: "HDR Wallpaper 124", width: 3840, height: 2400 },
        { src: "./Wallpapers/HDR_Wallpaper_125.jpg", alt: "HDR Wallpaper 125", width: 1920, height: 1080 },
        { src: "./Wallpapers/HDR_Wallpaper_126.jpg", alt: "HDR Wallpaper 126", width: 2560, height: 1600 },
        { src: "./Wallpapers/HDR_Wallpaper_127.jpg", alt: "HDR Wallpaper 127", width: 1920, height: 1080 },
        { src: "./Wallpapers/HDR_Wallpaper_128.jpg", alt: "HDR Wallpaper 128", width: 1920, height: 1080 },
        { src: "./Wallpapers/HDR_Wallpaper_129.jpg", alt: "HDR Wallpaper 129", width: 2560, height: 1440 },
        { src: "./Wallpapers/HDR_Wallpaper_130.jpg", alt: "HDR Wallpaper 130", width: 1920, height: 1080 },
        { src: "./Wallpapers/HDR_Wallpaper_131.jpg", alt: "HDR Wallpaper 131", width: 3840, height: 2160 },
        { src: "./Wallpapers/HDR_Wallpaper_132.jpg", alt: "HDR Wallpaper 132", width: 3840, height: 2160 },
        { src: "./Wallpapers/HDR_Wallpaper_133.jpg", alt: "HDR Wallpaper 133", width: 3840, height: 2160 },
        { src: "./Wallpapers/HDR_Wallpaper_134.jpg", alt: "HDR Wallpaper 134", width: 1920, height: 1080 },
        { src: "./Wallpapers/HDR_Wallpaper_135.jpg", alt: "HDR Wallpaper 135", width: 3840, height: 2160 },
        { src: "./Wallpapers/HDR_Wallpaper_136.jpg", alt: "HDR Wallpaper 136", width: 1920, height: 1080 },
        { src: "./Wallpapers/HDR_Wallpaper_137.jpg", alt: "HDR Wallpaper 137", width: 5120, height: 2160 },
        { src: "./Wallpapers/HDR_Wallpaper_138.jpg", alt: "HDR Wallpaper 138", width: 1920, height: 1079 },
        { src: "./Wallpapers/HDR_Wallpaper_139.jpg", alt: "HDR Wallpaper 139", width: 1920, height: 1080 },
        { src: "./Wallpapers/HDR_Wallpaper_140.jpg", alt: "HDR Wallpaper 140", width: 6000, height: 3375 },
        { src: "./Wallpapers/HDR_Wallpaper_141.jpg", alt: "HDR Wallpaper 141", width: 1920, height: 1080 },
        { src: "./Wallpapers/HDR_Wallpaper_142.jpg", alt: "HDR Wallpaper 142", width: 1920, height: 1080 },
        { src: "./Wallpapers/HDR_Wallpaper_143.jpg", alt: "HDR Wallpaper 143", width: 3840, height: 2079 },
        { src: "./Wallpapers/HDR_Wallpaper_144.jpg", alt: "HDR Wallpaper 144", width: 1600, height: 900 },
        { src: "./Wallpapers/HDR_Wallpaper_145.jpg", alt: "HDR Wallpaper 145", width: 6761, height: 2729 },
        { src: "./Wallpapers/HDR_Wallpaper_146.jpg", alt: "HDR Wallpaper 146", width: 3840, height: 1200 },
        { src: "./Wallpapers/HDR_Wallpaper_147.jpg", alt: "HDR Wallpaper 147", width: 1920, height: 1080 },
        { src: "./Wallpapers/HDR_Wallpaper_148.jpg", alt: "HDR Wallpaper 148", width: 2560, height: 1440 },
        { src: "./Wallpapers/HDR_Wallpaper_149.jpg", alt: "HDR Wallpaper 149", width: 3840, height: 2160 },
        { src: "./Wallpapers/HDR_Wallpaper_150.jpg", alt: "HDR Wallpaper 150", width: 1920, height: 1080 },
        { src: "./Wallpapers/HDR_Wallpaper_151.jpg", alt: "HDR Wallpaper 151", width: 1920, height: 1080 },
        { src: "./Wallpapers/HDR_Wallpaper_152.jpg", alt: "HDR Wallpaper 152", width: 1920, height: 1080 },
        { src: "./Wallpapers/HDR_Wallpaper_153.jpg", alt: "HDR Wallpaper 153", width: 1920, height: 1080 },
        { src: "./Wallpapers/HDR_Wallpaper_154.jpg", alt: "HDR Wallpaper 154", width: 3840, height: 2400 },
        { src: "./Wallpapers/HDR_Wallpaper_155.jpg", alt: "HDR Wallpaper 155", width: 2688, height: 1512 },
        { src: "./Wallpapers/HDR_Wallpaper_156.jpg", alt: "HDR Wallpaper 156", width: 3840, height: 2160 },
        { src: "./Wallpapers/HDR_Wallpaper_157.jpg", alt: "HDR Wallpaper 157", width: 1920, height: 840 },
        { src: "./Wallpapers/HDR_Wallpaper_158.jpg", alt: "HDR Wallpaper 158", width: 3840, height: 2160 },
        { src: "./Wallpapers/HDR_Wallpaper_159.jpg", alt: "HDR Wallpaper 159", width: 1920, height: 1080 },
        { src: "./Wallpapers/HDR_Wallpaper_160.jpg", alt: "HDR Wallpaper 160", width: 1920, height: 1080 },
        { src: "./Wallpapers/HDR_Wallpaper_161.jpg", alt: "HDR Wallpaper 161", width: 3840, height: 2160 },
        { src: "./Wallpapers/HDR_Wallpaper_162.jpg", alt: "HDR Wallpaper 162", width: 1920, height: 1080 },
        { src: "./Wallpapers/HDR_Wallpaper_163.jpg", alt: "HDR Wallpaper 163", width: 4618, height: 2220 },
        { src: "./Wallpapers/HDR_Wallpaper_164.jpg", alt: "HDR Wallpaper 164", width: 2560, height: 1440 },
        { src: "./Wallpapers/HDR_Wallpaper_165.jpg", alt: "HDR Wallpaper 165", width: 1366, height: 768 },
        { src: "./Wallpapers/HDR_Wallpaper_166.jpg", alt: "HDR Wallpaper 166", width: 1920, height: 1080 },
        { src: "./Wallpapers/HDR_Wallpaper_167.jpg", alt: "HDR Wallpaper 167", width: 3629, height: 1798 },
        { src: "./Wallpapers/HDR_Wallpaper_168.jpg", alt: "HDR Wallpaper 168", width: 1920, height: 1200 },
        { src: "./Wallpapers/HDR_Wallpaper_169.jpg", alt: "HDR Wallpaper 169", width: 3840, height: 2160 },
        { src: "./Wallpapers/HDR_Wallpaper_170.jpg", alt: "HDR Wallpaper 170", width: 1920, height: 1080 },
        { src: "./Wallpapers/HDR_Wallpaper_171.jpg", alt: "HDR Wallpaper 171", width: 2048, height: 1125 },
        { src: "./Wallpapers/HDR_Wallpaper_172.jpg", alt: "HDR Wallpaper 172", width: 1920, height: 1080 },
        { src: "./Wallpapers/HDR_Wallpaper_173.jpg", alt: "HDR Wallpaper 173", width: 1920, height: 1080 },
        { src: "./Wallpapers/HDR_Wallpaper_174.jpg", alt: "HDR Wallpaper 174", width: 2000, height: 1333 },
        { src: "./Wallpapers/HDR_Wallpaper_175.jpg", alt: "HDR Wallpaper 175", width: 3840, height: 2133 },
        { src: "./Wallpapers/HDR_Wallpaper_176.jpg", alt: "HDR Wallpaper 176", width: 2160, height: 1080 },
        { src: "./Wallpapers/HDR_Wallpaper_177.jpg", alt: "HDR Wallpaper 177", width: 3840, height: 2160 },
        { src: "./Wallpapers/HDR_Wallpaper_178.jpg", alt: "HDR Wallpaper 178", width: 7680, height: 2160 },
        { src: "./Wallpapers/HDR_Wallpaper_179.jpg", alt: "HDR Wallpaper 179", width: 3840, height: 2160 },
        { src: "./Wallpapers/HDR_Wallpaper_180.jpg", alt: "HDR Wallpaper 180", width: 1920, height: 1080 },
        { src: "./Wallpapers/HDR_Wallpaper_181.jpg", alt: "HDR Wallpaper 181", width: 1600, height: 867 },
        { src: "./Wallpapers/HDR_Wallpaper_182.jpg", alt: "HDR Wallpaper 182", width: 1920, height: 1080 },
        { src: "./Wallpapers/HDR_Wallpaper_183.jpg", alt: "HDR Wallpaper 183", width: 3840, height: 1573 },
        { src: "./Wallpapers/HDR_Wallpaper_184.jpg", alt: "HDR Wallpaper 184", width: 1920, height: 1080 },
        { src: "./Wallpapers/HDR_Wallpaper_185.jpg", alt: "HDR Wallpaper 185", width: 1920, height: 1238 },
        { src: "./Wallpapers/HDR_Wallpaper_186.jpg", alt: "HDR Wallpaper 186", width: 5120, height: 3173 },
        { src: "./Wallpapers/HDR_Wallpaper_187.jpg", alt: "HDR Wallpaper 187", width: 1920, height: 1080 },
        { src: "./Wallpapers/HDR_Wallpaper_188.jpg", alt: "HDR Wallpaper 188", width: 3840, height: 2160 },
        { src: "./Wallpapers/HDR_Wallpaper_189.jpg", alt: "HDR Wallpaper 189", width: 4032, height: 2268 },
        { src: "./Wallpapers/HDR_Wallpaper_190.jpg", alt: "HDR Wallpaper 190", width: 3840, height: 2160 },
        { src: "./Wallpapers/HDR_Wallpaper_191.jpg", alt: "HDR Wallpaper 191", width: 1920, height: 900 },
        { src: "./Wallpapers/HDR_Wallpaper_192.jpg", alt: "HDR Wallpaper 192", width: 2048, height: 1080 },
        { src: "./Wallpapers/HDR_Wallpaper_193.jpg", alt: "HDR Wallpaper 193", width: 3840, height: 2160 },
        { src: "./Wallpapers/HDR_Wallpaper_194.jpg", alt: "HDR Wallpaper 194", width: 3840, height: 1080 },
        { src: "./Wallpapers/HDR_Wallpaper_195.jpg", alt: "HDR Wallpaper 195", width: 1920, height: 1080 },
        { src: "./Wallpapers/HDR_Wallpaper_196.jpg", alt: "HDR Wallpaper 196", width: 1920, height: 927 },
        { src: "./Wallpapers/HDR_Wallpaper_197.jpg", alt: "HDR Wallpaper 197", width: 1920, height: 1080 },
        { src: "./Wallpapers/HDR_Wallpaper_198.jpg", alt: "HDR Wallpaper 198", width: 3840, height: 2160 },
        { src: "./Wallpapers/HDR_Wallpaper_199.jpg", alt: "HDR Wallpaper 199", width: 8000, height: 4503 },
        { src: "./Wallpapers/HDR_Wallpaper_200.jpg", alt: "HDR Wallpaper 200", width: 1920, height: 1080 },
        { src: "./Wallpapers/HDR_Wallpaper_201.jpg", alt: "HDR Wallpaper 201", width: 5184, height: 2787 },
        { src: "./Wallpapers/HDR_Wallpaper_202.jpg", alt: "HDR Wallpaper 202", width: 1920, height: 1080 },
        { src: "./Wallpapers/HDR_Wallpaper_203.jpg", alt: "HDR Wallpaper 203", width: 5507, height: 3098 },
        { src: "./Wallpapers/HDR_Wallpaper_204.jpg", alt: "HDR Wallpaper 204", width: 1920, height: 1200 },
        { src: "./Wallpapers/HDR_Wallpaper_205.jpg", alt: "HDR Wallpaper 205", width: 3840, height: 2160 },
        { src: "./Wallpapers/HDR_Wallpaper_206.jpg", alt: "HDR Wallpaper 206", width: 2048, height: 1280 },
        { src: "./Wallpapers/HDR_Wallpaper_207.jpg", alt: "HDR Wallpaper 207", width: 2230, height: 1080 },
        { src: "./Wallpapers/HDR_Wallpaper_208.jpg", alt: "HDR Wallpaper 208", width: 1920, height: 1080 },
        { src: "./Wallpapers/HDR_Wallpaper_209.jpg", alt: "HDR Wallpaper 209", width: 1920, height: 1080 },
        { src: "./Wallpapers/HDR_Wallpaper_210.jpg", alt: "HDR Wallpaper 210", width: 2592, height: 1080 },
        { src: "./Wallpapers/HDR_Wallpaper_211.jpg", alt: "HDR Wallpaper 211", width: 1920, height: 1080 },
        { src: "./Wallpapers/HDR_Wallpaper_212.jpg", alt: "HDR Wallpaper 212", width: 2560, height: 1440 },
        { src: "./Wallpapers/HDR_Wallpaper_213.jpg", alt: "HDR Wallpaper 213", width: 1920, height: 1080 },
        { src: "./Wallpapers/HDR_Wallpaper_214.jpg", alt: "HDR Wallpaper 214", width: 1920, height: 1200 },
        { src: "./Wallpapers/HDR_Wallpaper_215.jpg", alt: "HDR Wallpaper 215", width: 2000, height: 998 },
        { src: "./Wallpapers/HDR_Wallpaper_216.jpg", alt: "HDR Wallpaper 216", width: 1920, height: 1053 },
        { src: "./Wallpapers/HDR_Wallpaper_217.jpg", alt: "HDR Wallpaper 217", width: 2560, height: 1440 },

    ];

    return (
        <>
            <div className="view flex flex-wrap mx-2 my-9">
                {images.map((image, index) => {
                    return (
                        <div key={index} className="viewin  flex w-1/4" onClick={() => openPopup(image.src)} onMouseEnter={() => showTooltip(image)} onMouseLeave={hideTooltip}>
                            <div className="viewinin flex m-1.5 tooltip-container w-full h-[240px] bg-[rgba(0,0,0,0.2)]">
                                <Image
                                    src={image.src}
                                    width={640}
                                    height={480}
                                    alt={image.alt}
                                />
                                {tooltipContent && (
                                    <div
                                        className="tooltip">
                                        {tooltipContent}
                                    </div>
                                )}
                            </div>
                        </div>
                    )
                })}
            </div>
            {popupVisible && (
                <div className="popup">
                    <div className="popup-buttons w-full fixed t-0 flex justify-between items-center p-2">
                        <div className="popy flex gap-4 justify-center items-center">
                            <div className="btn show1 hover:bg-[rgba(255,255,255,0.1)] rounded-full" onClick={closePopup}><img src="./img/arrow_back.svg" alt="back" /></div>
                            <div className="over over1">Back</div>
                            <div className="popy2 flex gap-3"><img className="w-6" src="./img/logo.png" alt="img" /><span className="text-[#EDF4F2] title">{selectedImage.slice(12)}</span></div>
                        </div>
                        <div className="popy3 flex gap-6 justify-center items-center">
                            <span onClick={printPage} className="btn show2 hide hover:bg-[rgba(255,255,255,0.1)] rounded-full"><img src="./img/print.svg" alt="print" /></span>
                            <div className="over over2">Print</div>
                            <span onClick={downloadImage} className="btn show3 hover:bg-[rgba(255,255,255,0.1)] rounded-full"><img src="./img/download.svg" alt="download" /></span>
                            <div className="over over3">Download</div>
                            <span className="btn show4 hover:bg-[rgba(255,255,255,0.1)] rounded-full" onClick={closePopup}><img src="./img/close.svg" alt="close" /></span>
                            <div className="over over4">Close</div>
                        </div>
                    </div>
                    <img className="popup-image" src={selectedImage} alt="Popup Image" />
                </div>
            )}
        </>
    )
}

export default Wallframe
