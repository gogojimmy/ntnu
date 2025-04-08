import React, {
	createContext,
	useState,
	useContext,
	ReactNode,
	useCallback,
} from "react";

// Define the shape of the context data
interface SlidesContextProps {
	totalSlides: number;
	slidePaths: string[];
	getNextSlidePath: (currentPath: string) => string | undefined;
	getPrevSlidePath: (currentPath: string) => string | undefined;
}

// Create the context
const SlidesContext = createContext<SlidesContextProps | undefined>(undefined);

// Define the props for the provider component
interface SlidesProviderProps {
	children: ReactNode;
	initialTotalSlides?: number;
	slidePaths?: string[]; // Add slidePaths prop
}

// Create the provider component
export const SlidesProvider: React.FC<SlidesProviderProps> = ({
	children,
	initialTotalSlides = 0, // Default to 0 if not provided
	slidePaths = [], // Default to empty array
}) => {
	const [totalSlides] = useState<number>(
		initialTotalSlides || slidePaths.length
	); // Use initial or calculated total

	// Function to find the next slide path
	const getNextSlidePath = useCallback(
		(currentPath: string): string | undefined => {
			const currentIndex = slidePaths.findIndex((path) => path === currentPath);
			if (currentIndex !== -1 && currentIndex < slidePaths.length - 1) {
				return slidePaths[currentIndex + 1];
			}
			return undefined;
		},
		[slidePaths]
	);

	// Function to find the previous slide path
	const getPrevSlidePath = useCallback(
		(currentPath: string): string | undefined => {
			const currentIndex = slidePaths.findIndex((path) => path === currentPath);
			if (currentIndex !== -1 && currentIndex > 0) {
				return slidePaths[currentIndex - 1];
			}
			return undefined;
		},
		[slidePaths]
	);

	const value = {
		totalSlides,
		slidePaths,
		getNextSlidePath,
		getPrevSlidePath,
	};

	return (
		<SlidesContext.Provider value={value}>{children}</SlidesContext.Provider>
	);
};

// Create a custom hook for easy context consumption
export const useSlides = (): SlidesContextProps => {
	const context = useContext(SlidesContext);
	if (context === undefined) {
		throw new Error("useSlides must be used within a SlidesProvider");
	}
	return context;
};
