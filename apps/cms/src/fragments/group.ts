import { q, z } from '@spon/cms/src/lib/groqd-client'
import type { Group } from '../../sanity.types'
import { assetFragment } from './asset'
import { lettersFragment } from './letters'
import { linkFragment } from './link'
import { markdownFragment } from './markdown'

export const groupFragment = q.fragment<Group>().project((root) => ({
	...root.conditionalByType(
		{
			letters: (q) => q.project({ ...lettersFragment, _key: z.string() }),
			markdown: (q) => q.project({ ...markdownFragment, _key: z.string() }),
			asset: (q) => q.project({ ...assetFragment, _key: z.string() }),
			link: (q) => q.project({ ...linkFragment, _key: z.string() }),
			// level 1
			group: (group1) =>
				group1.project({
					_key: z.string(),
					_type: z.literal('group').nullable(),
					group: group1
						.field('group[]')
						.project((project1) => ({
							...project1.conditionalByType({
								letters: (q) =>
									q.project({ ...lettersFragment, _key: z.string() }),
								markdown: (q) =>
									q.project({ ...markdownFragment, _key: z.string() }),
								asset: (q) => q.project({ ...assetFragment, _key: z.string() }),
								link: (q) => q.project({ ...linkFragment, _key: z.string() }),
								group: (group2) =>
									group2.project({
										_type: z.literal('group').nullable(),
										_key: z.string(),
										group: group2
											.field('group[]')
											.project((project2) => ({
												...project2.conditionalByType({
													letters: (q) =>
														q.project({ ...lettersFragment, _key: z.string() }),
													markdown: (q) =>
														q.project({
															...markdownFragment,
															_key: z.string(),
														}),
													asset: (q) =>
														q.project({ ...assetFragment, _key: z.string() }),
													link: (q) =>
														q.project({ ...linkFragment, _key: z.string() }),
													group: (group3) => {
														return group3.project({
															_type: z.literal('group').nullable(),
															_key: z.string(),
															group: group3
																.field('group[]')
																.project((project3) => ({
																	...project3.conditionalByType({
																		letters: (q) =>
																			q.project({
																				...lettersFragment,
																				_key: z.string(),
																			}),
																		markdown: (q) =>
																			q.project({
																				...markdownFragment,
																				_key: z.string(),
																			}),
																		asset: (q) =>
																			q.project({
																				...assetFragment,
																				_key: z.string(),
																			}),
																		link: (q) =>
																			q.project({
																				...linkFragment,
																				_key: z.string(),
																			}),
																		// "Parameter 'group4' implicitly has an 'any' type."
																		group: (group4) =>
																			group4.project({
																				_key: z.string(),
																				_type: z.literal('group').nullable(),
																				group: group4
																					.field('group[]')
																					.project((project4) => ({
																						...project4.conditionalByType({
																							letters: (q) =>
																								q.project({
																									...lettersFragment,
																									_key: z.string(),
																								}),
																							markdown: (q) =>
																								q.project({
																									...markdownFragment,
																									_key: z.string(),
																								}),
																							asset: (q) =>
																								q.project({
																									...assetFragment,
																									_key: z.string(),
																								}),
																							link: (q) =>
																								q.project({
																									...linkFragment,
																									_key: z.string(),
																								}),
																							group: (group5) =>
																								group5.project({
																									_key: z.string(),
																									_type: z
																										.literal('group')
																										.nullable(),
																									group: group5
																										.field('group[]')
																										.project((project5) => ({
																											...project5.conditionalByType(
																												{
																													letters: (q) =>
																														q.project({
																															...lettersFragment,
																															_key: z.string(),
																														}),
																													markdown: (q) =>
																														q.project({
																															...markdownFragment,
																															_key: z.string(),
																														}),
																													asset: (q) =>
																														q.project({
																															...assetFragment,
																															_key: z.string(),
																														}),
																													link: (q) =>
																														q.project({
																															...linkFragment,
																															_key: z.string(),
																														}),
																												},
																											),
																										}))
																										.nullable(),
																								}),
																						}),
																					}))
																					.nullable(),
																			}),
																	}),
																}))
																.nullable(),
														})
													},
												}),
											}))
											.nullable(true),
									}),
							}),
						}))
						.nullable(true),
				}),
		},
		{ isExhaustive: false },
	),
}))
