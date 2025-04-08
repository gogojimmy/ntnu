import React, { createContext, useState, useContext, ReactNode } from "react";

// Define the shape of the context data
interface SlidesContextProps {
	totalSlides: number;
	// We can add more global slide settings here later if needed
}

// Create the context with a default value (or null/undefined if preferred, handling required)
const SlidesContext = createContext<SlidesContextProps | undefined>(undefined);

// Define the props for the provider component
interface SlidesProviderProps {
	children: ReactNode;
	// Optionally, allow passing an initial totalSlides count
	initialTotalSlides?: number;
}

// Create the provider component
export const SlidesProvider: React.FC<SlidesProviderProps> = ({
	children,
	initialTotalSlides = 31,
}) => {
	// For now, use a fixed value. Later, this could be calculated dynamically.
	const [totalSlides] = useState<number>(initialTotalSlides);

	const value = { totalSlides };

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
