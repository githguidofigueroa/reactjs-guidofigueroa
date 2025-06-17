import dellXps15 from './assets/img/dell-xps-15.jpg';
import appleMacbookPro16 from './assets/img/apple-macbook-pro-16.jpg';
import asusRogZephyrusG15 from './assets/img/asus-rog-zephyrus-g15.jpg';
import hpSpectreX360 from './assets/img/hp-spectre-x360.jpg';
import lenovoThinkpadX1Carbon from './assets/img/lenovo-thinkpad-x1-carbon.jpg';
import msiCreatorZ16 from './assets/img/msi-creator-z16.jpg';
import acerPredatorHelios300 from './assets/img/acer-predator-helios-300.jpg';
import appleMacbookAirM2 from './assets/img/apple-macbook-air-m2.jpg';
import dellPrecision5560 from './assets/img/dell-precision-5560.jpg';
import hpEliteDragonfly from './assets/img/hp-elite-dragonfly.jpg';
import razerBlade15 from './assets/img/razer-blade-15.jpg';
import samsungGalaxyBookPro from './assets/img/samsung-galaxy-book-pro.jpg';

export const categorias = [
  { id: 'programacion', nombre: 'Programación' },
  { id: 'arquitectura', nombre: 'Arquitectura' },
  { id: 'gamer', nombre: 'Gamer' },
  { id: 'diseno', nombre: 'Diseño Gráfico' },
  { id: 'oficina', nombre: 'Oficina Premium' }
];

export const productos = [
  {
    id: 1,
    title: 'Dell XPS 15',
    description: 'Notebook de alta gama ideal para desarrollo de software, con procesador Intel i7, 32GB RAM y pantalla 4K.',
    price: 950000,
    image: dellXps15,
    category: 'programacion'
  },
  {
    id: 2,
    title: 'Apple MacBook Pro 16"',
    description: 'Potencia y diseño para profesionales de arquitectura y modelado 3D. M1 Pro, 32GB RAM, 1TB SSD.',
    price: 1450000,
    image: appleMacbookPro16,
    category: 'arquitectura'
  },
  {
    id: 3,
    title: 'Asus ROG Zephyrus G15',
    description: 'Notebook gamer con Ryzen 9, RTX 3080, 32GB RAM y pantalla 165Hz. Máximo rendimiento para gaming.',
    price: 1200000,
    image: asusRogZephyrusG15,
    category: 'gamer'
  },
  {
    id: 4,
    title: 'HP Spectre x360',
    description: 'Convertible premium para diseño gráfico, pantalla táctil OLED, Intel i7, 16GB RAM.',
    price: 980000,
    image: hpSpectreX360,
    category: 'diseno'
  },
  {
    id: 5,
    title: 'Lenovo ThinkPad X1 Carbon',
    description: 'Ligera, resistente y potente. Ideal para ejecutivos y oficinas premium. Intel i7, 16GB RAM.',
    price: 870000,
    image: lenovoThinkpadX1Carbon,
    category: 'oficina'
  },
  {
    id: 6,
    title: 'MSI Creator Z16',
    description: 'Pensada para creadores de contenido y diseño avanzado. Intel i9, RTX 3060, 32GB RAM.',
    price: 1350000,
    image: msiCreatorZ16,
    category: 'diseno'
  },
  {
    id: 7,
    title: 'Acer Predator Helios 300',
    description: 'Notebook gamer con Intel i7, RTX 3070, 16GB RAM y pantalla 144Hz.',
    price: 1100000,
    image: acerPredatorHelios300,
    category: 'gamer'
  },
  {
    id: 8,
    title: 'Apple MacBook Air M2',
    description: 'Liviana, potente y con gran autonomía. Perfecta para programadores y movilidad.',
    price: 900000,
    image: appleMacbookAirM2,
    category: 'programacion'
  },
  {
    id: 9,
    title: 'Dell Precision 5560',
    description: 'Estación de trabajo móvil para arquitectura y renderizado profesional. Xeon, 64GB RAM.',
    price: 1800000,
    image: dellPrecision5560,
    category: 'arquitectura'
  },
  {
    id: 10,
    title: 'HP Elite Dragonfly',
    description: 'Ultraliviana, elegante y segura. Para ejecutivos que buscan lo mejor en movilidad.',
    price: 950000,
    image: hpEliteDragonfly,
    category: 'oficina'
  },
  {
    id: 11,
    title: 'Razer Blade 15',
    description: 'Notebook gamer premium, Intel i7, RTX 3070, pantalla 240Hz, ideal para eSports.',
    price: 1550000,
    image: razerBlade15,
    category: 'gamer'
  },
  {
    id: 12,
    title: 'Samsung Galaxy Book Pro',
    description: 'Notebook ultraliviana, AMOLED, Intel i7, 16GB RAM, perfecta para oficina y movilidad.',
    price: 980000,
    image: samsungGalaxyBookPro,
    category: 'oficina'
  }
]; 