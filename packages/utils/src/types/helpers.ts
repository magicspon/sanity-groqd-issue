export type GetByTypeObject<T, Constraint> = T extends any
	? Constraint extends Record<keyof Constraint, any>
		? {
				[K in keyof Constraint]: K extends keyof T
					? T[K] extends Constraint[K]
						? T[K]
						: never
					: never
			} extends Record<keyof Constraint, Constraint[keyof Constraint]>
			? T
			: never
		: never
	: never

export type Prettify<T> = {
	[K in keyof T]: T[K]
} & {}
