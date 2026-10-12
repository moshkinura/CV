declare module 'imagemin-svgo' {
	import type { Plugin } from 'imagemin';
	import type { Config } from 'svgo';

	export default function imageminSvgo(options?: Config): Plugin;
}

declare module 'imagemin-webp' {
	import type { Plugin } from 'imagemin';

	interface Resize {
		width: number;
		height: number;
	}

	interface Crop extends Resize {
		x: number;
		y: number;
	}

	type Metadata = 'all' | 'none' | 'exif' | 'icc' | 'xmp';

	interface Options {
		preset?: 'default' | 'photo' | 'picture' | 'drawing' | 'icon' | 'text';
		quality?: number;
		alphaQuality?: number;
		method?: number;
		size?: number;
		sns?: number;
		filter?: number;
		autoFilter?: boolean;
		sharpness?: number;
		lossless?: boolean | number;
		nearLossless?: number;
		crop?: Crop;
		resize?: Resize;
		metadata?: Metadata | Metadata[];
	}

	export default function imageminWebp(options?: Options): Plugin;
}
