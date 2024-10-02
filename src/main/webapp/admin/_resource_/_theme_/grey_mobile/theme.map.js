(function()
{
	return function()
	{
		nexacro._setCSSMaps(
		{
            "Form" :
            			{
            				"self" :
            				{
            					"enabled" :
            					{
            						"border" : nexacro.BorderObject("0px none"),
            						"font" : nexacro.FontObject("18px \"Helvetica\",\"Malgun Gothic\",\"Roboto\",\"Apple SD Gothic Neo\",\"Microsoft NeoGothic\",\"Droid sans\",\"sans-serif\""),
            						"color" : nexacro.ColorObject("#272B37")
            					},
            					"contents" :
            					{
            					}
            				}
            			},
            			"MainFrame" :
            			{
            				"self" :
            				{
            					"enabled" :
            					{
            						"border" : nexacro.BorderObject("1px solid #646982")
            					}
            				}
            			},
            			"TitleBarControl" :
            			{
            				"self" :
            				{
            					"deactivate" :
            					{
            					},
            					"disabled" :
            					{
            					}
            				}
            			},
            			"titleicon" :
            			{
            				"parent" :
            				{
            					"TitleBarControl" :
            					{
            						"self" :
            						{
            							"enabled" :
            							{
            								"padding" : nexacro.PaddingObject("0px 10px 0px 10px"),
            								"color" : nexacro.ColorObject("#5B5E6A"),
            								"font" : nexacro.FontObject("16px \"Helvetica\",\"Malgun Gothic\",\"Roboto\",\"Apple SD Gothic Neo\",\"Microsoft NeoGothic\",\"Droid sans\",\"sans-serif\"")
            							},
            							"deactivate" :
            							{
            								"padding" : nexacro.PaddingObject("0px 10px 0px 10px"),
            								"color" : nexacro.ColorObject("#5B5E6A"),
            								"font" : nexacro.FontObject("16px \"Helvetica\",\"Malgun Gothic\",\"Roboto\",\"Apple SD Gothic Neo\",\"Microsoft NeoGothic\",\"Droid sans\",\"sans-serif\"")
            							},
            							"disabled" :
            							{
            								"padding" : nexacro.PaddingObject("0px 10px 0px 10px"),
            								"color" : nexacro.ColorObject("#5B5E6A"),
            								"font" : nexacro.FontObject("16px \"Helvetica\",\"Malgun Gothic\",\"Roboto\",\"Apple SD Gothic Neo\",\"Microsoft NeoGothic\",\"Droid sans\",\"sans-serif\"")
            							}
            						}
            					}
            				}
            			},
            			"minbutton" :
            			{
            				"parent" :
            				{
            					"TitleBarControl" :
            					{
            						"self" :
            						{
            							"enabled" :
            							{
            								"icon" : nexacro.UrlObject("URL(\"theme://images/btn_min_N.png\")")
            							},
            							"focused" :
            							{
            								"icon" : nexacro.UrlObject("URL(\"theme://images/btn_min_N.png\")")
            							},
            							"selected" :
            							{
            								"icon" : nexacro.UrlObject("URL(\"theme://images/btn_min_N.png\")")
            							},
            							"deactivate" :
            							{
            								"icon" : nexacro.UrlObject("URL(\"theme://images/btn_min_N.png\")")
            							},
            							"pushed" :
            							{
            								"icon" : nexacro.UrlObject("URL(\"theme://images/btn_min_N.png\")")
            							},
            							"disabled" :
            							{
            								"icon" : nexacro.UrlObject("URL(\"theme://images/btn_min_D.png\")")
            							}
            						}
            					}
            				}
            			},
            			"maxbutton" :
            			{
            				"parent" :
            				{
            					"TitleBarControl" :
            					{
            						"self" :
            						{
            							"enabled" :
            							{
            								"icon" : nexacro.UrlObject("URL(\"theme://images/btn_max_N.png\")")
            							},
            							"focused" :
            							{
            								"icon" : nexacro.UrlObject("URL(\"theme://images/btn_max_N.png\")")
            							},
            							"selected" :
            							{
            								"icon" : nexacro.UrlObject("URL(\"theme://images/btn_max_N.png\")")
            							},
            							"deactivate" :
            							{
            								"icon" : nexacro.UrlObject("URL(\"theme://images/btn_max_N.png\")")
            							},
            							"pushed" :
            							{
            								"icon" : nexacro.UrlObject("URL(\"theme://images/btn_max_N.png\")")
            							},
            							"disabled" :
            							{
            								"icon" : nexacro.UrlObject("URL(\"theme://images/btn_max_D.png\")")
            							}
            						}
            					}
            				}
            			},
            			"normalbutton" :
            			{
            				"parent" :
            				{
            					"TitleBarControl" :
            					{
            						"self" :
            						{
            							"enabled" :
            							{
            								"icon" : nexacro.UrlObject("URL(\"theme://images/btn_normal_N.png\")")
            							},
            							"focused" :
            							{
            								"icon" : nexacro.UrlObject("URL(\"theme://images/btn_normal_N.png\")")
            							},
            							"selected" :
            							{
            								"icon" : nexacro.UrlObject("URL(\"theme://images/btn_normal_N.png\")")
            							},
            							"deactivate" :
            							{
            								"icon" : nexacro.UrlObject("URL(\"theme://images/btn_normal_N.png\")")
            							},
            							"pushed" :
            							{
            								"icon" : nexacro.UrlObject("URL(\"theme://images/btn_normal_N.png\")")
            							},
            							"disabled" :
            							{
            								"icon" : nexacro.UrlObject("URL(\"theme://images/btn_normal_D.png\")")
            							}
            						}
            					}
            				}
            			},
            			"closebutton" :
            			{
            				"parent" :
            				{
            					"TitleBarControl" :
            					{
            						"self" :
            						{
            							"enabled" :
            							{
            								"icon" : nexacro.UrlObject("URL(\"theme://images/btn_close_N.png\")")
            							},
            							"focused" :
            							{
            								"icon" : nexacro.UrlObject("URL(\"theme://images/btn_close_N.png\")")
            							},
            							"selected" :
            							{
            								"icon" : nexacro.UrlObject("URL(\"theme://images/btn_close_N.png\")")
            							},
            							"deactivate" :
            							{
            								"icon" : nexacro.UrlObject("URL(\"theme://images/btn_close_N.png\")")
            							},
            							"pushed" :
            							{
            								"icon" : nexacro.UrlObject("URL(\"theme://images/btn_close_N.png\")")
            							},
            							"disabled" :
            							{
            								"icon" : nexacro.UrlObject("URL(\"theme://images/btn_close_D.png\")")
            							}
            						}
            					}
            				}
            			},
            			"Edit" :
            			{
            				"self" :
            				{
            					"enabled" :
            					{
            						"border" : nexacro.BorderObject("1px solid #CCCCCC"),
            						"padding" : nexacro.PaddingObject("0px 0px 0px 15px")
            					},
            					"focused" :
            					{
            						"border" : nexacro.BorderObject("1px solid #272B37")
            					},
            					"disabled" :
            					{
            						"border" : nexacro.BorderObject("1px solid #E0E6EA"),
            						"color" : nexacro.ColorObject("#A9B4BF")
            					},
            					"readonly" :
            					{
            						"border" : nexacro.BorderObject("1px solid #E0E6EA")
            					},
            					"nulltext" :
            					{
            						"color" : nexacro.ColorObject("#A9B4BF")
            					}
            				}
            			},
            			"EditControl" :
            			{
            				"self" :
            				{
            					"enabled" :
            					{
            						"border" : nexacro.BorderObject("1px solid #CCCCCC"),
            						"padding" : nexacro.PaddingObject("0px 0px 0px 15px")
            					},
            					"focused" :
            					{
            						"border" : nexacro.BorderObject("1px solid #272B37")
            					},
            					"disabled" :
            					{
            						"border" : nexacro.BorderObject("1px solid #E0E6EA"),
            						"color" : nexacro.ColorObject("#A9B4BF")
            					},
            					"readonly" :
            					{
            						"border" : nexacro.BorderObject("1px solid #E0E6EA")
            					},
            					"nulltext" :
            					{
            						"color" : nexacro.ColorObject("#A9B4BF")
            					}
            				}
            			},
            			"MaskEdit" :
            			{
            				"self" :
            				{
            					"enabled" :
            					{
            						"border" : nexacro.BorderObject("1px solid #CCCCCC"),
            						"padding" : nexacro.PaddingObject("0px 15px 0px 0px")
            					},
            					"focused" :
            					{
            						"border" : nexacro.BorderObject("1px solid #272B37")
            					},
            					"disabled" :
            					{
            						"border" : nexacro.BorderObject("1px solid #E0E6EA"),
            						"color" : nexacro.ColorObject("#A9B4BF")
            					},
            					"readonly" :
            					{
            						"border" : nexacro.BorderObject("1px solid #E0E6EA")
            					},
            					"nulltext" :
            					{
            						"color" : nexacro.ColorObject("#A9B4BF")
            					},
            					"invalidtext" :
            					{
            						"color" : nexacro.ColorObject("#A9B4BF")
            					}
            				}
            			},
            			"MaskEditControl" :
            			{
            				"self" :
            				{
            					"enabled" :
            					{
            						"border" : nexacro.BorderObject("1px solid #CCCCCC"),
            						"padding" : nexacro.PaddingObject("0px 15px 0px 0px")
            					},
            					"focused" :
            					{
            						"border" : nexacro.BorderObject("1px solid #272B37")
            					},
            					"disabled" :
            					{
            						"border" : nexacro.BorderObject("1px solid #E0E6EA"),
            						"color" : nexacro.ColorObject("#A9B4BF")
            					},
            					"readonly" :
            					{
            						"border" : nexacro.BorderObject("1px solid #E0E6EA")
            					},
            					"nulltext" :
            					{
            						"color" : nexacro.ColorObject("#A9B4BF")
            					},
            					"invalidtext" :
            					{
            						"color" : nexacro.ColorObject("#A9B4BF")
            					}
            				}
            			},
            			"TextArea" :
            			{
            				"self" :
            				{
            					"enabled" :
            					{
            						"border" : nexacro.BorderObject("1px solid #CCCCCC"),
            						"padding" : nexacro.PaddingObject("15px"),
            						"wordWrap" : "char",
            						"font" : nexacro.FontObject("18px/28px \"Helvetica\",\"Malgun Gothic\",\"Roboto\",\"Apple SD Gothic Neo\",\"Microsoft NeoGothic\",\"Droid sans\",\"sans-serif\"")
            					},
            					"focused" :
            					{
            						"border" : nexacro.BorderObject("1px solid #272B37")
            					},
            					"disabled" :
            					{
            						"border" : nexacro.BorderObject("1px solid #E0E6EA"),
            						"color" : nexacro.ColorObject("#A9B4BF")
            					},
            					"readonly" :
            					{
            						"border" : nexacro.BorderObject("1px solid #E0E6EA")
            					},
            					"nulltext" :
            					{
            						"color" : nexacro.ColorObject("#A9B4BF")
            					}
            				}
            			},
            			"TextAreaControl" :
            			{
            				"self" :
            				{
            					"enabled" :
            					{
            						"border" : nexacro.BorderObject("1px solid #CCCCCC"),
            						"padding" : nexacro.PaddingObject("15px"),
            						"wordWrap" : "char",
            						"font" : nexacro.FontObject("18px/28px \"Helvetica\",\"Malgun Gothic\",\"Roboto\",\"Apple SD Gothic Neo\",\"Microsoft NeoGothic\",\"Droid sans\",\"sans-serif\"")
            					},
            					"focused" :
            					{
            						"border" : nexacro.BorderObject("1px solid #272B37")
            					},
            					"disabled" :
            					{
            						"border" : nexacro.BorderObject("1px solid #E0E6EA"),
            						"color" : nexacro.ColorObject("#A9B4BF")
            					},
            					"readonly" :
            					{
            						"border" : nexacro.BorderObject("1px solid #E0E6EA")
            					},
            					"nulltext" :
            					{
            						"color" : nexacro.ColorObject("#A9B4BF")
            					}
            				}
            			},
            			"Calendar" :
            			{
            				"self" :
            				{
            					"invalidtext" :
            					{
            						"color" : nexacro.ColorObject("#A9B4BF")
            					},
            					"enabled" :
            					{
            						"border" : nexacro.BorderObject("1px solid #CCCCCC")
            					},
            					"focused" :
            					{
            						"border" : nexacro.BorderObject("1px solid #272B37")
            					},
            					"disabled" :
            					{
            						"border" : nexacro.BorderObject("1px solid #E0E6EA"),
            						"color" : nexacro.ColorObject("#A9B4BF")
            					},
            					"readonly" :
            					{
            						"border" : nexacro.BorderObject("1px solid #E0E6EA")
            					}
            				}
            			},
            			"CalendarControl" :
            			{
            				"self" :
            				{
            					"invalidtext" :
            					{
            						"color" : nexacro.ColorObject("#A9B4BF")
            					},
            					"enabled" :
            					{
            						"border" : nexacro.BorderObject("1px solid #CCCCCC")
            					},
            					"focused" :
            					{
            						"border" : nexacro.BorderObject("1px solid #272B37")
            					},
            					"disabled" :
            					{
            						"border" : nexacro.BorderObject("1px solid #E0E6EA"),
            						"color" : nexacro.ColorObject("#A9B4BF")
            					},
            					"readonly" :
            					{
            						"border" : nexacro.BorderObject("1px solid #E0E6EA")
            					}
            				}
            			},
            			"Spin" :
            			{
            				"self" :
            				{
            					"invalidtext" :
            					{
            						"color" : nexacro.ColorObject("#A9B4BF")
            					},
            					"enabled" :
            					{
            						"border" : nexacro.BorderObject("1px solid #CCCCCC")
            					},
            					"focused" :
            					{
            						"border" : nexacro.BorderObject("1px solid #272B37")
            					},
            					"disabled" :
            					{
            						"border" : nexacro.BorderObject("1px solid #E0E6EA"),
            						"color" : nexacro.ColorObject("#A9B4BF")
            					},
            					"readonly" :
            					{
            						"border" : nexacro.BorderObject("1px solid #E0E6EA")
            					}
            				}
            			},
            			"SpinControl" :
            			{
            				"self" :
            				{
            					"invalidtext" :
            					{
            						"color" : nexacro.ColorObject("#A9B4BF")
            					},
            					"enabled" :
            					{
            						"border" : nexacro.BorderObject("1px solid #CCCCCC")
            					},
            					"focused" :
            					{
            						"border" : nexacro.BorderObject("1px solid #272B37")
            					},
            					"disabled" :
            					{
            						"border" : nexacro.BorderObject("1px solid #E0E6EA"),
            						"color" : nexacro.ColorObject("#A9B4BF")
            					},
            					"readonly" :
            					{
            						"border" : nexacro.BorderObject("1px solid #E0E6EA")
            					}
            				}
            			},
            			"spinedit" :
            			{
            				"parent" :
            				{
            					"Spin" :
            					{
            						"self" :
            						{
            							"enabled" :
            							{
            								"padding" : nexacro.PaddingObject("0px 15px 0px 0px"),
            								"border" : nexacro.BorderObject("0px none")
            							},
            							"focused" :
            							{
            								"padding" : nexacro.PaddingObject("0px 15px 0px 0px"),
            								"border" : nexacro.BorderObject("0px none")
            							},
            							"disabled" :
            							{
            								"padding" : nexacro.PaddingObject("0px 15px 0px 0px"),
            								"border" : nexacro.BorderObject("0px none")
            							},
            							"readonly" :
            							{
            								"padding" : nexacro.PaddingObject("0px 15px 0px 0px"),
            								"border" : nexacro.BorderObject("0px none")
            							}
            						}
            					},
            					"SpinControl" :
            					{
            						"self" :
            						{
            							"enabled" :
            							{
            								"padding" : nexacro.PaddingObject("0px 15px 0px 0px"),
            								"border" : nexacro.BorderObject("0px none")
            							},
            							"focused" :
            							{
            								"padding" : nexacro.PaddingObject("0px 15px 0px 0px"),
            								"border" : nexacro.BorderObject("0px none")
            							},
            							"disabled" :
            							{
            								"padding" : nexacro.PaddingObject("0px 15px 0px 0px"),
            								"border" : nexacro.BorderObject("0px none")
            							},
            							"readonly" :
            							{
            								"padding" : nexacro.PaddingObject("0px 15px 0px 0px"),
            								"border" : nexacro.BorderObject("0px none")
            							}
            						}
            					}
            				}
            			},
            			"spinupbutton" :
            			{
            				"parent" :
            				{
            					"Spin" :
            					{
            						"self" :
            						{
            							"enabled" :
            							{
            								"icon" : nexacro.UrlObject("url(\"theme://images/btn_SpinUp_N.png\")"),
            								"padding" : nexacro.PaddingObject("0px")
            							},
            							"focused" :
            							{
            								"icon" : nexacro.UrlObject("url(\"theme://images/btn_SpinUp_N.png\")"),
            								"padding" : nexacro.PaddingObject("0px")
            							},
            							"pushed" :
            							{
            								"icon" : nexacro.UrlObject("url(\"theme://images/btn_SpinUp_N.png\")"),
            								"padding" : nexacro.PaddingObject("0px")
            							},
            							"disabled" :
            							{
            								"icon" : nexacro.UrlObject("url(\"theme://images/btn_SpinUp_D.png\")"),
            								"padding" : nexacro.PaddingObject("0px")
            							}
            						}
            					},
            					"SpinControl" :
            					{
            						"self" :
            						{
            							"enabled" :
            							{
            								"icon" : nexacro.UrlObject("url(\"theme://images/btn_SpinUp_N.png\")"),
            								"padding" : nexacro.PaddingObject("0px")
            							},
            							"focused" :
            							{
            								"icon" : nexacro.UrlObject("url(\"theme://images/btn_SpinUp_N.png\")"),
            								"padding" : nexacro.PaddingObject("0px")
            							},
            							"pushed" :
            							{
            								"icon" : nexacro.UrlObject("url(\"theme://images/btn_SpinUp_N.png\")"),
            								"padding" : nexacro.PaddingObject("0px")
            							},
            							"disabled" :
            							{
            								"icon" : nexacro.UrlObject("url(\"theme://images/btn_SpinUp_D.png\")"),
            								"padding" : nexacro.PaddingObject("0px")
            							}
            						}
            					},
            					"yearspin" :
            					{
            						"parent" :
            						{
            							"head" :
            							{
            								"parent" :
            								{
            									"DatePickerControl" :
            									{
            										"self" :
            										{
            											"enabled" :
            											{
            												"icon" : nexacro.UrlObject("url(\"theme://images/btn_SpinUp_N.png\")"),
            												"padding" : nexacro.PaddingObject("4px 0px 0px 0px")
            											},
            											"pushed" :
            											{
            												"icon" : nexacro.UrlObject("url(\"theme://images/btn_SpinUp_N.png\")"),
            												"padding" : nexacro.PaddingObject("4px 0px 0px 0px")
            											},
            											"disabled" :
            											{
            												"icon" : nexacro.UrlObject("url(\"theme://images/btn_SpinUp_D.png\")")
            											}
            										}
            									}
            								}
            							}
            						}
            					},
            					"monthspin" :
            					{
            						"parent" :
            						{
            							"head" :
            							{
            								"parent" :
            								{
            									"DatePickerControl" :
            									{
            										"self" :
            										{
            											"enabled" :
            											{
            												"icon" : nexacro.UrlObject("url(\"theme://images/btn_SpinUp_N.png\")"),
            												"padding" : nexacro.PaddingObject("4px 0px 0px 0px")
            											},
            											"pushed" :
            											{
            												"icon" : nexacro.UrlObject("url(\"theme://images/btn_SpinUp_N.png\")"),
            												"padding" : nexacro.PaddingObject("4px 0px 0px 0px")
            											},
            											"disabled" :
            											{
            												"icon" : nexacro.UrlObject("url(\"theme://images/btn_SpinUp_D.png\")")
            											}
            										}
            									}
            								}
            							}
            						}
            					}
            				}
            			},
            			"spindownbutton" :
            			{
            				"parent" :
            				{
            					"Spin" :
            					{
            						"self" :
            						{
            							"enabled" :
            							{
            								"icon" : nexacro.UrlObject("url(\"theme://images/btn_SpinDown_N.png\")"),
            								"padding" : nexacro.PaddingObject("0px")
            							},
            							"focused" :
            							{
            								"icon" : nexacro.UrlObject("url(\"theme://images/btn_SpinDown_N.png\")"),
            								"padding" : nexacro.PaddingObject("0px")
            							},
            							"pushed" :
            							{
            								"icon" : nexacro.UrlObject("url(\"theme://images/btn_SpinDown_N.png\")"),
            								"padding" : nexacro.PaddingObject("0px")
            							},
            							"disabled" :
            							{
            								"icon" : nexacro.UrlObject("url(\"theme://images/btn_SpinDown_D.png\")"),
            								"padding" : nexacro.PaddingObject("0px")
            							}
            						}
            					},
            					"SpinControl" :
            					{
            						"self" :
            						{
            							"enabled" :
            							{
            								"icon" : nexacro.UrlObject("url(\"theme://images/btn_SpinDown_N.png\")"),
            								"padding" : nexacro.PaddingObject("0px")
            							},
            							"focused" :
            							{
            								"icon" : nexacro.UrlObject("url(\"theme://images/btn_SpinDown_N.png\")"),
            								"padding" : nexacro.PaddingObject("0px")
            							},
            							"pushed" :
            							{
            								"icon" : nexacro.UrlObject("url(\"theme://images/btn_SpinDown_N.png\")"),
            								"padding" : nexacro.PaddingObject("0px")
            							},
            							"disabled" :
            							{
            								"icon" : nexacro.UrlObject("url(\"theme://images/btn_SpinDown_D.png\")"),
            								"padding" : nexacro.PaddingObject("0px")
            							}
            						}
            					},
            					"yearspin" :
            					{
            						"parent" :
            						{
            							"head" :
            							{
            								"parent" :
            								{
            									"DatePickerControl" :
            									{
            										"self" :
            										{
            											"enabled" :
            											{
            												"icon" : nexacro.UrlObject("url(\"theme://images/btn_SpinDown_N.png\")"),
            												"border" : nexacro.BorderObject("0px none")
            											},
            											"pushed" :
            											{
            												"icon" : nexacro.UrlObject("url(\"theme://images/btn_SpinDown_N.png\")"),
            												"border" : nexacro.BorderObject("0px none")
            											},
            											"disabled" :
            											{
            												"icon" : nexacro.UrlObject("url(\"theme://images/btn_SpinDown_D.png\")")
            											}
            										}
            									}
            								}
            							}
            						}
            					},
            					"monthspin" :
            					{
            						"parent" :
            						{
            							"head" :
            							{
            								"parent" :
            								{
            									"DatePickerControl" :
            									{
            										"self" :
            										{
            											"enabled" :
            											{
            												"icon" : nexacro.UrlObject("url(\"theme://images/btn_SpinDown_N.png\")")
            											},
            											"pushed" :
            											{
            												"icon" : nexacro.UrlObject("url(\"theme://images/btn_SpinDown_N.png\")")
            											},
            											"disabled" :
            											{
            												"icon" : nexacro.UrlObject("url(\"theme://images/btn_SpinDown_D.png\")")
            											}
            										}
            									}
            								}
            							}
            						}
            					}
            				}
            			},
            			"Combo" :
            			{
            				"self" :
            				{
            					"enabled" :
            					{
            						"border" : nexacro.BorderObject("1px solid #CCCCCC")
            					},
            					"focused" :
            					{
            						"border" : nexacro.BorderObject("1px solid #272B37")
            					},
            					"disabled" :
            					{
            						"border" : nexacro.BorderObject("1px solid #E0E6EA"),
            						"color" : nexacro.ColorObject("#A9B4BF")
            					},
            					"readonly" :
            					{
            						"border" : nexacro.BorderObject("1px solid #E0E6EA")
            					}
            				}
            			},
            			"ComboControl" :
            			{
            				"self" :
            				{
            					"enabled" :
            					{
            						"border" : nexacro.BorderObject("1px solid #CCCCCC")
            					},
            					"focused" :
            					{
            						"border" : nexacro.BorderObject("1px solid #272B37")
            					},
            					"disabled" :
            					{
            						"border" : nexacro.BorderObject("1px solid #E0E6EA"),
            						"color" : nexacro.ColorObject("#A9B4BF")
            					},
            					"readonly" :
            					{
            						"border" : nexacro.BorderObject("1px solid #E0E6EA")
            					}
            				}
            			},
            			"comboedit" :
            			{
            				"parent" :
            				{
            					"Combo" :
            					{
            						"self" :
            						{
            							"enabled" :
            							{
            								"padding" : nexacro.PaddingObject("0px 0px 0px 15px"),
            								"border" : nexacro.BorderObject("0px none")
            							},
            							"focused" :
            							{
            								"padding" : nexacro.PaddingObject("0px 0px 0px 15px"),
            								"border" : nexacro.BorderObject("0px none")
            							},
            							"disabled" :
            							{
            								"border" : nexacro.BorderObject("0px none")
            							},
            							"readonly" :
            							{
            								"border" : nexacro.BorderObject("0px none")
            							}
            						}
            					},
            					"ComboControl" :
            					{
            						"self" :
            						{
            							"enabled" :
            							{
            								"padding" : nexacro.PaddingObject("0px 0px 0px 15px"),
            								"border" : nexacro.BorderObject("0px none")
            							},
            							"focused" :
            							{
            								"padding" : nexacro.PaddingObject("0px 0px 0px 15px"),
            								"border" : nexacro.BorderObject("0px none")
            							},
            							"disabled" :
            							{
            								"border" : nexacro.BorderObject("0px none")
            							},
            							"readonly" :
            							{
            								"border" : nexacro.BorderObject("0px none")
            							}
            						}
            					}
            				}
            			},
            			"dropbutton" :
            			{
            				"parent" :
            				{
            					"Combo" :
            					{
            						"self" :
            						{
            							"enabled" :
            							{
            								"icon" : nexacro.UrlObject("url(\"theme://images/btn_drop_N.png\")")
            							},
            							"focused" :
            							{
            								"icon" : nexacro.UrlObject("url(\"theme://images/btn_drop_N.png\")")
            							},
            							"pushed" :
            							{
            								"icon" : nexacro.UrlObject("url(\"theme://images/btn_drop_N.png\")")
            							},
            							"disabled" :
            							{
            								"icon" : nexacro.UrlObject("url(\"theme://images/btn_drop_D.png\")")
            							}
            						}
            					},
            					"ComboControl" :
            					{
            						"self" :
            						{
            							"enabled" :
            							{
            								"icon" : nexacro.UrlObject("url(\"theme://images/btn_drop_N.png\")")
            							},
            							"focused" :
            							{
            								"icon" : nexacro.UrlObject("url(\"theme://images/btn_drop_N.png\")")
            							},
            							"pushed" :
            							{
            								"icon" : nexacro.UrlObject("url(\"theme://images/btn_drop_N.png\")")
            							},
            							"disabled" :
            							{
            								"icon" : nexacro.UrlObject("url(\"theme://images/btn_drop_D.png\")")
            							}
            						}
            					},
            					"Calendar" :
            					{
            						"self" :
            						{
            							"enabled" :
            							{
            								"icon" : nexacro.UrlObject("url(\"theme://images/btn_CalDrop_N.png\")")
            							},
            							"focused" :
            							{
            								"icon" : nexacro.UrlObject("url(\"theme://images/btn_CalDrop_N.png\")")
            							},
            							"pushed" :
            							{
            								"icon" : nexacro.UrlObject("url(\"theme://images/btn_CalDrop_N.png\")")
            							},
            							"disabled" :
            							{
            								"icon" : nexacro.UrlObject("url(\"theme://images/btn_CalDrop_D.png\")")
            							}
            						}
            					},
            					"CalendarControl" :
            					{
            						"self" :
            						{
            							"enabled" :
            							{
            								"icon" : nexacro.UrlObject("url(\"theme://images/btn_CalDrop_N.png\")")
            							},
            							"focused" :
            							{
            								"icon" : nexacro.UrlObject("url(\"theme://images/btn_CalDrop_N.png\")")
            							},
            							"pushed" :
            							{
            								"icon" : nexacro.UrlObject("url(\"theme://images/btn_CalDrop_N.png\")")
            							},
            							"disabled" :
            							{
            								"icon" : nexacro.UrlObject("url(\"theme://images/btn_CalDrop_D.png\")")
            							}
            						}
            					}
            				}
            			},
            			"combolist" :
            			{
            				"parent" :
            				{
            					"Combo" :
            					{
            						"self" :
            						{
            							"enabled" :
            							{
            								"border" : nexacro.BorderObject("1px solid #272B37")
            							}
            						}
            					},
            					"ComboControl" :
            					{
            						"self" :
            						{
            							"enabled" :
            							{
            								"border" : nexacro.BorderObject("1px solid #272B37")
            							}
            						}
            					}
            				}
            			},
            			"listboxitem" :
            			{
            				"parent" :
            				{
            					"combolist" :
            					{
            						"parent" :
            						{
            							"Combo" :
            							{
            								"self" :
            								{
            									"enabled" :
            									{
            										"padding" : nexacro.PaddingObject("15px 0px 15px 15px")
            									},
            									"focused" :
            									{
            									},
            									"selected" :
            									{
            									}
            								}
            							},
            							"ComboControl" :
            							{
            								"self" :
            								{
            									"enabled" :
            									{
            										"padding" : nexacro.PaddingObject("15px 0px 15px 15px")
            									},
            									"focused" :
            									{
            									},
            									"selected" :
            									{
            									}
            								}
            							}
            						}
            					},
            					"ListBox" :
            					{
            						"self" :
            						{
            							"enabled" :
            							{
            								"padding" : nexacro.PaddingObject("15px 0px 15px 15px")
            							},
            							"readonly" :
            							{
            								"padding" : nexacro.PaddingObject("15px 0px 15px 15px")
            							},
            							"focused" :
            							{
            							},
            							"selected" :
            							{
            							},
            							"disabled" :
            							{
            								"color" : nexacro.ColorObject("#A9B4BF")
            							}
            						}
            					}
            				}
            			},
            			"CheckBox" :
            			{
            				"self" :
            				{
            					"enabled" :
            					{
            						"icon" : nexacro.UrlObject("url(\"theme://images/img_check_NN.png\")"),
            						"textPadding" : nexacro.PaddingObject("5px")
            					},
            					"focused" :
            					{
            						"icon" : nexacro.UrlObject("url(\"theme://images/img_check_NN.png\")"),
            						"textPadding" : nexacro.PaddingObject("5px")
            					},
            					"disabled" :
            					{
            						"icon" : nexacro.UrlObject("url(\"theme://images/img_check_DN.png\")")
            					},
            					"mouseover_selected" :
            					{
            						"icon" : nexacro.UrlObject("url(\"theme://images/img_check_OS.png\")")
            					},
            					"selected" :
            					{
            						"icon" : nexacro.UrlObject("url(\"theme://images/img_check_OS.png\")")
            					},
            					"focused_selected" :
            					{
            						"icon" : nexacro.UrlObject("url(\"theme://images/img_check_OS.png\")")
            					},
            					"disabled_selected" :
            					{
            						"icon" : nexacro.UrlObject("url(\"theme://images/img_check_DS.png\")")
            					}
            				}
            			},
            			"CheckBoxControl" :
            			{
            				"self" :
            				{
            					"enabled" :
            					{
            						"icon" : nexacro.UrlObject("url(\"theme://images/img_check_NN.png\")"),
            						"textPadding" : nexacro.PaddingObject("5px")
            					},
            					"focused" :
            					{
            						"icon" : nexacro.UrlObject("url(\"theme://images/img_check_NN.png\")"),
            						"textPadding" : nexacro.PaddingObject("5px")
            					},
            					"disabled" :
            					{
            						"icon" : nexacro.UrlObject("url(\"theme://images/img_check_DN.png\")")
            					},
            					"mouseover_selected" :
            					{
            						"icon" : nexacro.UrlObject("url(\"theme://images/img_check_OS.png\")")
            					},
            					"selected" :
            					{
            						"icon" : nexacro.UrlObject("url(\"theme://images/img_check_OS.png\")")
            					},
            					"focused_selected" :
            					{
            						"icon" : nexacro.UrlObject("url(\"theme://images/img_check_OS.png\")")
            					},
            					"disabled_selected" :
            					{
            						"icon" : nexacro.UrlObject("url(\"theme://images/img_check_DS.png\")")
            					}
            				}
            			},
            			"radioitem" :
            			{
            				"parent" :
            				{
            					"Radio" :
            					{
            						"self" :
            						{
            							"enabled" :
            							{
            								"icon" : nexacro.UrlObject("url(\"theme://images/img_radio_NN.png\")"),
            								"textPadding" : nexacro.PaddingObject("5px")
            							},
            							"disabled" :
            							{
            								"icon" : nexacro.UrlObject("url(\"theme://images/img_radio_DN.png\")")
            							},
            							"selected" :
            							{
            								"icon" : nexacro.UrlObject("url(\"theme://images/img_radio_OS.png\")")
            							},
            							"mouseover_selected" :
            							{
            								"icon" : nexacro.UrlObject("url(\"theme://images/img_radio_OS.png\")")
            							},
            							"disabled_selected" :
            							{
            								"icon" : nexacro.UrlObject("url(\"theme://images/img_radio_DS.png\")")
            							}
            						}
            					}
            				}
            			},
            			"Button" :
            			{
            				"self" :
            				{
            					"enabled" :
            					{
            						"border" : nexacro.BorderObject("1px solid #CCCCCC"),
            						"padding" : nexacro.PaddingObject("0px 15px 0px 15px"),
            						"font" : nexacro.FontObject("bold 18px \"Helvetica\",\"Malgun Gothic\",\"Apple SD Gothic Neo\",\"Microsoft NeoGothic\",\"Droid sans\",\"sans-serif\""),
            						"color" : nexacro.ColorObject("#646982")
            					},
            					"focused" :
            					{
            						"border" : nexacro.BorderObject("1px solid #CCCCCC"),
            						"padding" : nexacro.PaddingObject("0px 15px 0px 15px"),
            						"font" : nexacro.FontObject("bold 18px \"Helvetica\",\"Malgun Gothic\",\"Apple SD Gothic Neo\",\"Microsoft NeoGothic\",\"Droid sans\",\"sans-serif\""),
            						"color" : nexacro.ColorObject("#646982")
            					},
            					"selected" :
            					{
            						"border" : nexacro.BorderObject("1px solid #CCCCCC"),
            						"padding" : nexacro.PaddingObject("0px 15px 0px 15px"),
            						"font" : nexacro.FontObject("bold 18px \"Helvetica\",\"Malgun Gothic\",\"Apple SD Gothic Neo\",\"Microsoft NeoGothic\",\"Droid sans\",\"sans-serif\""),
            						"color" : nexacro.ColorObject("#646982")
            					},
            					"pushed" :
            					{
            						"border" : nexacro.BorderObject("1px solid #272B37"),
            						"color" : nexacro.ColorObject("#646982")
            					},
            					"disabled" :
            					{
            						"border" : nexacro.BorderObject("1px solid #E0E6EA"),
            						"color" : nexacro.ColorObject("#A9B4BF")
            					}
            				}
            			},
            			"FileUpload" :
            			{
            				"self" :
            				{
            					"enabled" :
            					{
            						"border" : nexacro.BorderObject("0px none")
            					},
            					"focused" :
            					{
            						"border" : nexacro.BorderObject("0px none")
            					},
            					"selected" :
            					{
            						"border" : nexacro.BorderObject("0px none")
            					},
            					"disabled" :
            					{
            						"border" : nexacro.BorderObject("0px none")
            					}
            				}
            			},
            			"fileuploaditem" :
            			{
            				"parent" :
            				{
            					"FileUpload" :
            					{
            						"self" :
            						{
            							"enabled" :
            							{
            								"border" : nexacro.BorderObject("0px none")
            							},
            							"focused" :
            							{
            								"border" : nexacro.BorderObject("0px none")
            							}
            						}
            					}
            				}
            			},
            			"fileuploaditemedit" :
            			{
            				"parent" :
            				{
            					"fileuploaditem" :
            					{
            						"parent" :
            						{
            							"FileUpload" :
            							{
            								"self" :
            								{
            									"focused" :
            									{
            									},
            									"readonly" :
            									{
            									}
            								}
            							}
            						}
            					}
            				}
            			},
            			"fileuploaditembutton" :
            			{
            				"parent" :
            				{
            					"fileuploaditem" :
            					{
            						"parent" :
            						{
            							"FileUpload" :
            							{
            								"self" :
            								{
            									"enabled" :
            									{
            										"border" : nexacro.BorderObject("1px solid #CCCCCC"),
            										"padding" : nexacro.PaddingObject("0px 15px 0px 15px"),
            										"font" : nexacro.FontObject("bold 18px \"Helvetica\",\"Malgun Gothic\",\"Roboto\",\"Apple SD Gothic Neo\",\"Microsoft NeoGothic\",\"Droid sans\",\"sans-serif\""),
            										"color" : nexacro.ColorObject("#646982")
            									},
            									"focused" :
            									{
            										"border" : nexacro.BorderObject("1px solid #CCCCCC"),
            										"padding" : nexacro.PaddingObject("0px 15px 0px 15px"),
            										"font" : nexacro.FontObject("bold 18px \"Helvetica\",\"Malgun Gothic\",\"Roboto\",\"Apple SD Gothic Neo\",\"Microsoft NeoGothic\",\"Droid sans\",\"sans-serif\""),
            										"color" : nexacro.ColorObject("#646982")
            									},
            									"selected" :
            									{
            										"border" : nexacro.BorderObject("1px solid #CCCCCC"),
            										"padding" : nexacro.PaddingObject("0px 15px 0px 15px"),
            										"font" : nexacro.FontObject("bold 18px \"Helvetica\",\"Malgun Gothic\",\"Roboto\",\"Apple SD Gothic Neo\",\"Microsoft NeoGothic\",\"Droid sans\",\"sans-serif\""),
            										"color" : nexacro.ColorObject("#646982")
            									},
            									"pushed" :
            									{
            										"border" : nexacro.BorderObject("1px solid #272B37"),
            										"color" : nexacro.ColorObject("#646982")
            									},
            									"disabled" :
            									{
            										"border" : nexacro.BorderObject("1px solid #E0E6EA"),
            										"color" : nexacro.ColorObject("#A9B4BF")
            									}
            								}
            							}
            						}
            					}
            				}
            			},
            			"FileDownload" :
            			{
            				"self" :
            				{
            					"enabled" :
            					{
            						"border" : nexacro.BorderObject("1px solid #CCCCCC"),
            						"padding" : nexacro.PaddingObject("0px 15px 0px 15px"),
            						"font" : nexacro.FontObject("bold 18px \"Helvetica\",\"Malgun Gothic\",\"Roboto\",\"Apple SD Gothic Neo\",\"Microsoft NeoGothic\",\"Droid sans\",\"sans-serif\""),
            						"color" : nexacro.ColorObject("#646982")
            					},
            					"focused" :
            					{
            						"border" : nexacro.BorderObject("1px solid #CCCCCC"),
            						"padding" : nexacro.PaddingObject("0px 15px 0px 15px"),
            						"font" : nexacro.FontObject("bold 18px \"Helvetica\",\"Malgun Gothic\",\"Roboto\",\"Apple SD Gothic Neo\",\"Microsoft NeoGothic\",\"Droid sans\",\"sans-serif\""),
            						"color" : nexacro.ColorObject("#646982")
            					},
            					"pushed" :
            					{
            						"border" : nexacro.BorderObject("1px solid #272B37"),
            						"color" : nexacro.ColorObject("#646982")
            					},
            					"disabled" :
            					{
            						"border" : nexacro.BorderObject("1px solid #E0E6EA"),
            						"color" : nexacro.ColorObject("#A9B4BF")
            					}
            				}
            			},
            			"ProgressBar" :
            			{
            				"self" :
            				{
            					"enabled" :
            					{
            						"border" : nexacro.BorderObject("1px solid #CCCCCC"),
            						"padding" : nexacro.PaddingObject("2px"),
            						"color" : nexacro.ColorObject("#424557")
            					},
            					"disabled" :
            					{
            						"border" : nexacro.BorderObject("1px solid #E0E6EA")
            					}
            				}
            			},
            			"ProgressBarControl" :
            			{
            				"self" :
            				{
            					"enabled" :
            					{
            						"border" : nexacro.BorderObject("1px solid #CCCCCC"),
            						"padding" : nexacro.PaddingObject("2px"),
            						"color" : nexacro.ColorObject("#424557")
            					},
            					"disabled" :
            					{
            						"border" : nexacro.BorderObject("1px solid #E0E6EA")
            					}
            				}
            			},
            			"progressbaritem" :
            			{
            				"parent" :
            				{
            					"ProgressBar" :
            					{
            						"self" :
            						{
            							"disabled" :
            							{
            							}
            						}
            					},
            					"ProgressBarControl" :
            					{
            						"self" :
            						{
            							"disabled" :
            							{
            							}
            						}
            					}
            				}
            			},
            			"progressbartext" :
            			{
            				"parent" :
            				{
            					"ProgressBar" :
            					{
            						"self" :
            						{
            							"enabled" :
            							{
            								"padding" : nexacro.PaddingObject("0px 0px 0px 15px"),
            								"font" : nexacro.FontObject("15px \"Helvetica\",\"Malgun Gothic\",\"Roboto\",\"Apple SD Gothic Neo\",\"Microsoft NeoGothic\",\"Droid sans\",\"sans-serif\"")
            							}
            						}
            					},
            					"ProgressBarControl" :
            					{
            						"self" :
            						{
            							"enabled" :
            							{
            								"padding" : nexacro.PaddingObject("0px 0px 0px 15px"),
            								"font" : nexacro.FontObject("15px \"Helvetica\",\"Malgun Gothic\",\"Roboto\",\"Apple SD Gothic Neo\",\"Microsoft NeoGothic\",\"Droid sans\",\"sans-serif\"")
            							}
            						}
            					}
            				}
            			},
            			"groupboxcontents" :
            			{
            				"parent" :
            				{
            					"GroupBox" :
            					{
            						"self" :
            						{
            							"enabled" :
            							{
            								"border" : nexacro.BorderObject("1px solid #CCCCCC")
            							},
            							"disabled" :
            							{
            								"border" : nexacro.BorderObject("1px solid #E0E6EA"),
            								"color" : nexacro.ColorObject("#A9B4BF")
            							}
            						}
            					}
            				}
            			},
            			"groupboxtitle" :
            			{
            				"parent" :
            				{
            					"GroupBox" :
            					{
            						"self" :
            						{
            							"enabled" :
            							{
            								"textPadding" : nexacro.PaddingObject("0px 5px 0px 5px")
            							},
            							"disabled" :
            							{
            								"color" : nexacro.ColorObject("#A9B4BF")
            							}
            						}
            					}
            				}
            			},
            			"nextbutton" :
            			{
            				"parent" :
            				{
            					"Tab" :
            					{
            						"self" :
            						{
            							"enabled" :
            							{
            								"icon" : nexacro.UrlObject("url(\"theme://images/btn_tabNext_N.png\")"),
            								"padding" : nexacro.PaddingObject("10px 10px 10px 5px")
            							},
            							"focused" :
            							{
            								"icon" : nexacro.UrlObject("url(\"theme://images/btn_tabNext_N.png\")"),
            								"padding" : nexacro.PaddingObject("10px 10px 10px 5px")
            							},
            							"pushed" :
            							{
            								"icon" : nexacro.UrlObject("url(\"theme://images/btn_tabNext_N.png\")"),
            								"padding" : nexacro.PaddingObject("10px 10px 10px 5px")
            							}
            						}
            					},
            					"head" :
            					{
            						"parent" :
            						{
            							"DatePickerControl" :
            							{
            								"self" :
            								{
            									"enabled" :
            									{
            										"icon" : nexacro.UrlObject("url(\"theme://images/btn_next_N.png\")")
            									},
            									"pushed" :
            									{
            										"icon" : nexacro.UrlObject("url(\"theme://images/btn_next_N.png\")")
            									},
            									"disabled" :
            									{
            										"icon" : nexacro.UrlObject("url(\"theme://images/btn_next_D.png\")")
            									}
            								}
            							}
            						}
            					},
            					"Menu" :
            					{
            						"self" :
            						{
            							"enabled" :
            							{
            								"icon" : nexacro.UrlObject("url(\"theme://images/btn_MenuPrev_N.png\")")
            							},
            							"focused" :
            							{
            							},
            							"pushed" :
            							{
            							},
            							"disabled" :
            							{
            								"icon" : nexacro.UrlObject("url(\"theme://images/btn_MenuPrev_D.png\")")
            							}
            						}
            					},
            					"PopupMenu" :
            					{
            						"self" :
            						{
            							"focused" :
            							{
            							},
            							"pushed" :
            							{
            							},
            							"selected" :
            							{
            							},
            							"disabled" :
            							{
            							}
            						}
            					},
            					"PopupMenuControl" :
            					{
            						"self" :
            						{
            							"focused" :
            							{
            							},
            							"pushed" :
            							{
            							},
            							"selected" :
            							{
            							},
            							"disabled" :
            							{
            							}
            						}
            					}
            				}
            			},
            			"prevbutton" :
            			{
            				"parent" :
            				{
            					"Tab" :
            					{
            						"self" :
            						{
            							"enabled" :
            							{
            								"icon" : nexacro.UrlObject("url(\"theme://images/btn_tabPrev_N.png\")"),
            								"padding" : nexacro.PaddingObject("10px 10px 10px 5px")
            							},
            							"focused" :
            							{
            								"icon" : nexacro.UrlObject("url(\"theme://images/btn_tabPrev_N.png\")"),
            								"padding" : nexacro.PaddingObject("10px 10px 10px 5px")
            							},
            							"pushed" :
            							{
            								"icon" : nexacro.UrlObject("url(\"theme://images/btn_tabPrev_N.png\")"),
            								"padding" : nexacro.PaddingObject("10px 10px 10px 5px")
            							}
            						}
            					},
            					"head" :
            					{
            						"parent" :
            						{
            							"DatePickerControl" :
            							{
            								"self" :
            								{
            									"enabled" :
            									{
            										"icon" : nexacro.UrlObject("url(\"theme://images/btn_prev_N.png\")")
            									},
            									"pushed" :
            									{
            										"icon" : nexacro.UrlObject("url(\"theme://images/btn_prev_N.png\")")
            									},
            									"disabled" :
            									{
            										"icon" : nexacro.UrlObject("url(\"theme://images/btn_prev_D.png\")")
            									}
            								}
            							}
            						}
            					},
            					"Menu" :
            					{
            						"self" :
            						{
            							"enabled" :
            							{
            								"icon" : nexacro.UrlObject("url(\"theme://images/btn_MenuNext_N.png\")")
            							},
            							"focused" :
            							{
            							},
            							"pushed" :
            							{
            							},
            							"disabled" :
            							{
            								"icon" : nexacro.UrlObject("url(\"theme://images/btn_MenuNext_D.png\")")
            							}
            						}
            					},
            					"PopupMenu" :
            					{
            						"self" :
            						{
            							"focused" :
            							{
            							},
            							"pushed" :
            							{
            							},
            							"selected" :
            							{
            							},
            							"disabled" :
            							{
            							}
            						}
            					},
            					"PopupMenuControl" :
            					{
            						"self" :
            						{
            							"focused" :
            							{
            							},
            							"pushed" :
            							{
            							},
            							"selected" :
            							{
            							},
            							"disabled" :
            							{
            							}
            						}
            					}
            				}
            			},
            			"extrabutton" :
            			{
            				"parent" :
            				{
            					"tabbuttonitem" :
            					{
            						"parent" :
            						{
            							"Tab" :
            							{
            								"self" :
            								{
            									"enabled" :
            									{
            										"icon" : nexacro.UrlObject("url(\"theme://images/btn_tabExtra_N.png\")"),
            										"padding" : nexacro.PaddingObject("0px 10px 0px 0px")
            									},
            									"focused" :
            									{
            										"icon" : nexacro.UrlObject("url(\"theme://images/btn_tabExtra_N.png\")"),
            										"padding" : nexacro.PaddingObject("0px 10px 0px 0px")
            									},
            									"pushed" :
            									{
            										"icon" : nexacro.UrlObject("url(\"theme://images/btn_tabExtra_N.png\")"),
            										"padding" : nexacro.PaddingObject("0px 10px 0px 0px")
            									},
            									"selected" :
            									{
            										"icon" : nexacro.UrlObject("url(\"theme://images/btn_tabExtra_N.png\")"),
            										"padding" : nexacro.PaddingObject("0px 10px 0px 0px")
            									},
            									"disabled" :
            									{
            										"icon" : nexacro.UrlObject("url(\"theme://images/btn_tabExtra_D.png\")")
            									}
            								}
            							}
            						}
            					}
            				}
            			},
            			"tabbuttonitem" :
            			{
            				"parent" :
            				{
            					"Tab" :
            					{
            						"self" :
            						{
            							"enabled" :
            							{
            								"color" : nexacro.ColorObject("#272B37"),
            								"font" : nexacro.FontObject("18px \"Helvetica\",\"Malgun Gothic\",\"Roboto\",\"Apple SD Gothic Neo\",\"Microsoft NeoGothic\",\"Droid sans\",\"sans-serif\"")
            							},
            							"focused" :
            							{
            								"border" : nexacro.BorderObject("1px solid transparent, 1px solid transparent, 3px solid #6659FF, 1px solid transparent"),
            								"color" : nexacro.ColorObject("#272B37"),
            								"font" : nexacro.FontObject("bold 18px \"Helvetica\",\"Malgun Gothic\",\"Roboto\",\"Apple SD Gothic Neo\",\"Microsoft NeoGothic\",\"Droid sans\",\"sans-serif\"")
            							},
            							"selected" :
            							{
            								"border" : nexacro.BorderObject("1px solid transparent, 1px solid transparent, 3px solid #6659FF, 1px solid transparent"),
            								"color" : nexacro.ColorObject("#272B37"),
            								"font" : nexacro.FontObject("bold 18px \"Helvetica\",\"Malgun Gothic\",\"Roboto\",\"Apple SD Gothic Neo\",\"Microsoft NeoGothic\",\"Droid sans\",\"sans-serif\"")
            							},
            							"disabled" :
            							{
            								"color" : nexacro.ColorObject("#A9B4BF")
            							}
            						}
            					}
            				}
            			},
            			"tabbuttonitemtext" :
            			{
            				"parent" :
            				{
            					"tabbuttonitem" :
            					{
            						"parent" :
            						{
            							"Tab" :
            							{
            								"self" :
            								{
            									"enabled" :
            									{
            										"padding" : nexacro.PaddingObject("5px 25px 5px 25px")
            									},
            									"disabled" :
            									{
            										"color" : nexacro.ColorObject("#A9B4BF")
            									}
            								}
            							}
            						}
            					}
            				}
            			},
            			"tabpage" :
            			{
            				"parent" :
            				{
            					"Tab" :
            					{
            						"self" :
            						{
            							"focused" :
            							{
            							},
            							"disabled" :
            							{
            							}
            						}
            					}
            				}
            			},
            			"calendaredit" :
            			{
            				"parent" :
            				{
            					"Calendar" :
            					{
            						"self" :
            						{
            							"enabled" :
            							{
            								"padding" : nexacro.PaddingObject("0px 0px 0px 15px"),
            								"border" : nexacro.BorderObject("0px none")
            							},
            							"focused" :
            							{
            								"padding" : nexacro.PaddingObject("0px 0px 0px 15px"),
            								"border" : nexacro.BorderObject("0px none")
            							},
            							"disabled" :
            							{
            								"padding" : nexacro.PaddingObject("0px 0px 0px 15px"),
            								"border" : nexacro.BorderObject("0px none")
            							},
            							"readonly" :
            							{
            								"padding" : nexacro.PaddingObject("0px 0px 0px 15px"),
            								"border" : nexacro.BorderObject("0px none")
            							}
            						}
            					},
            					"CalendarControl" :
            					{
            						"self" :
            						{
            							"enabled" :
            							{
            								"padding" : nexacro.PaddingObject("0px 0px 0px 15px"),
            								"border" : nexacro.BorderObject("0px none")
            							},
            							"focused" :
            							{
            								"padding" : nexacro.PaddingObject("0px 0px 0px 15px"),
            								"border" : nexacro.BorderObject("0px none")
            							},
            							"disabled" :
            							{
            								"padding" : nexacro.PaddingObject("0px 0px 0px 15px"),
            								"border" : nexacro.BorderObject("0px none")
            							},
            							"readonly" :
            							{
            								"padding" : nexacro.PaddingObject("0px 0px 0px 15px"),
            								"border" : nexacro.BorderObject("0px none")
            							}
            						}
            					}
            				}
            			},
            			"calendarspindownbutton" :
            			{
            				"parent" :
            				{
            					"Calendar" :
            					{
            						"self" :
            						{
            							"enabled" :
            							{
            								"icon" : nexacro.UrlObject("url(\"theme://images/btn_SpinDown_N.png\")")
            							},
            							"focused" :
            							{
            								"icon" : nexacro.UrlObject("url(\"theme://images/btn_SpinDown_N.png\")")
            							},
            							"pushed" :
            							{
            								"icon" : nexacro.UrlObject("url(\"theme://images/btn_SpinDown_N.png\")")
            							},
            							"disabled" :
            							{
            								"icon" : nexacro.UrlObject("url(\"theme://images/btn_SpinDown_D.png\")")
            							}
            						}
            					},
            					"CalendarControl" :
            					{
            						"self" :
            						{
            							"enabled" :
            							{
            								"icon" : nexacro.UrlObject("url(\"theme://images/btn_SpinDown_N.png\")")
            							},
            							"focused" :
            							{
            								"icon" : nexacro.UrlObject("url(\"theme://images/btn_SpinDown_N.png\")")
            							},
            							"pushed" :
            							{
            								"icon" : nexacro.UrlObject("url(\"theme://images/btn_SpinDown_N.png\")")
            							},
            							"disabled" :
            							{
            								"icon" : nexacro.UrlObject("url(\"theme://images/btn_SpinDown_D.png\")")
            							}
            						}
            					}
            				}
            			},
            			"calendarspinupbutton" :
            			{
            				"parent" :
            				{
            					"Calendar" :
            					{
            						"self" :
            						{
            							"enabled" :
            							{
            								"icon" : nexacro.UrlObject("url(\"theme://images/btn_SpinUp_N.png\")")
            							},
            							"focused" :
            							{
            								"icon" : nexacro.UrlObject("url(\"theme://images/btn_SpinUp_N.png\")")
            							},
            							"pushed" :
            							{
            								"icon" : nexacro.UrlObject("url(\"theme://images/btn_SpinUp_N.png\")")
            							},
            							"disabled" :
            							{
            								"icon" : nexacro.UrlObject("url(\"theme://images/btn_SpinUp_D.png\")")
            							}
            						}
            					},
            					"CalendarControl" :
            					{
            						"self" :
            						{
            							"enabled" :
            							{
            								"icon" : nexacro.UrlObject("url(\"theme://images/btn_SpinUp_N.png\")")
            							},
            							"focused" :
            							{
            								"icon" : nexacro.UrlObject("url(\"theme://images/btn_SpinUp_N.png\")")
            							},
            							"pushed" :
            							{
            								"icon" : nexacro.UrlObject("url(\"theme://images/btn_SpinUp_N.png\")")
            							},
            							"disabled" :
            							{
            								"icon" : nexacro.UrlObject("url(\"theme://images/btn_SpinUp_D.png\")")
            							}
            						}
            					}
            				}
            			},
            			"DatePickerControl" :
            			{
            				"self" :
            				{
            					"enabled" :
            					{
            						"border" : nexacro.BorderObject("1px solid #272B37")
            					}
            				}
            			},
            			"head" :
            			{
            				"parent" :
            				{
            					"DatePickerControl" :
            					{
            						"self" :
            						{
            							"enabled" :
            							{
            								"font" : nexacro.FontObject("bold 25px \"Helvetica\",\"Malgun Gothic\",\"Roboto\",\"Apple SD Gothic Neo\",\"Microsoft NeoGothic\",\"Droid sans\",\"sans-serif\""),
            								"color" : nexacro.ColorObject("#272B37")
            							}
            						}
            					},
            					"Grid" :
            					{
            						"self" :
            						{
            							"enabled" :
            							{
            								"font" : nexacro.FontObject("bold 18px \"Helvetica\",\"Malgun Gothic\",\"Roboto\",\"Apple SD Gothic Neo\",\"Microsoft NeoGothic\",\"Droid sans\",\"sans-serif\""),
            								"color" : nexacro.ColorObject("#272B37")
            							}
            						}
            					}
            				}
            			},
            			"weekitem" :
            			{
            				"parent" :
            				{
            					"body" :
            					{
            						"parent" :
            						{
            							"DatePickerControl" :
            							{
            								"self" :
            								{
            									"enabled" :
            									{
            										"color" : nexacro.ColorObject("#272B37")
            									},
            									"saturday" :
            									{
            										"color" : nexacro.ColorObject("#4A98FF")
            									},
            									"sunday" :
            									{
            										"color" : nexacro.ColorObject("#FF5BA8")
            									}
            								}
            							}
            						}
            					}
            				}
            			},
            			"dayitem" :
            			{
            				"parent" :
            				{
            					"body" :
            					{
            						"parent" :
            						{
            							"DatePickerControl" :
            							{
            								"self" :
            								{
            									"enabled" :
            									{
            										"color" : nexacro.ColorObject("#4F525B")
            									},
            									"saturday" :
            									{
            										"color" : nexacro.ColorObject("#4A98FF")
            									},
            									"sunday" :
            									{
            										"color" : nexacro.ColorObject("#FF5BA8")
            									},
            									"trailingday" :
            									{
            										"color" : nexacro.ColorObject("#B5B5B5")
            									},
            									"today" :
            									{
            									},
            									"selected" :
            									{
            										"font" : nexacro.FontObject("bold 20px \"Helvetica\",\"Malgun Gothic\",\"Roboto\",\"Apple SD Gothic Neo\",\"Microsoft NeoGothic\",\"Droid sans\",\"sans-serif\"")
            									}
            								}
            							}
            						}
            					}
            				}
            			},
            			"VScrollIndicatorControl" :
            			{
            				"self" :
            				{
            					"enabled" :
            					{
            						"padding" : nexacro.PaddingObject("10px 5px 10px 0px")
            					}
            				}
            			},
            			"HScrollIndicatorControl" :
            			{
            				"self" :
            				{
            					"enabled" :
            					{
            						"padding" : nexacro.PaddingObject("0px 10px 5px 10px")
            					}
            				}
            			},
            			"Grid" :
            			{
            				"self" :
            				{
            					"enabled" :
            					{
            						"border" : nexacro.BorderObject("1px solid #DADCE1")
            					}
            				}
            			},
            			"cell" :
            			{
            				"parent" :
            				{
            					"row" :
            					{
            						"parent" :
            						{
            							"head" :
            							{
            								"parent" :
            								{
            									"Grid" :
            									{
            										"self" :
            										{
            											"enabled" :
            											{
            												"border" : nexacro.BorderObject("0px none,1px solid #DADCE1,1px solid #DADCE1,0px none")
            											}
            										}
            									}
            								}
            							},
            							"body" :
            							{
            								"parent" :
            								{
            									"Grid" :
            									{
            										"self" :
            										{
            											"enabled" :
            											{
            												"border" : nexacro.BorderObject("0px none,1px solid #DADCE1,1px solid #DADCE1,0px none"),
            												"padding" : nexacro.PaddingObject("6px")
            											},
            											"selected" :
            											{
            											}
            										}
            									}
            								}
            							},
            							"summary" :
            							{
            								"parent" :
            								{
            									"Grid" :
            									{
            										"self" :
            										{
            											"enabled" :
            											{
            												"border" : nexacro.BorderObject("0px none,1px solid #8CE1DB,0px none,0px none"),
            												"padding" : nexacro.PaddingObject("0px 40px 0px 0px")
            											}
            										}
            									}
            								}
            							}
            						}
            					}
            				}
            			},
            			"summary" :
            			{
            				"parent" :
            				{
            					"Grid" :
            					{
            						"self" :
            						{
            							"enabled" :
            							{
            								"border" : nexacro.BorderObject("1px solid #8CE1DB"),
            								"font" : nexacro.FontObject("bold 18px \"Helvetica\",\"Malgun Gothic\",\"Roboto\",\"Apple SD Gothic Neo\",\"Microsoft NeoGothic\",\"Droid sans\",\"sans-serif\""),
            								"color" : nexacro.ColorObject("#272B37")
            							}
            						}
            					}
            				}
            			},
            			"cellbutton" :
            			{
            				"parent" :
            				{
            					"GridCellControl" :
            					{
            						"self" :
            						{
            							"enabled" :
            							{
            								"border" : nexacro.BorderObject("1px solid #CCCCCC"),
            								"padding" : nexacro.PaddingObject("0px 15px 0px 15px"),
            								"font" : nexacro.FontObject("bold 18px \"Helvetica\",\"Malgun Gothic\",\"Roboto\",\"Apple SD Gothic Neo\",\"Microsoft NeoGothic\",\"Droid sans\",\"sans-serif\""),
            								"color" : nexacro.ColorObject("#646982")
            							},
            							"pushed" :
            							{
            								"color" : nexacro.ColorObject("#272B37")
            							},
            							"disabled" :
            							{
            								"border" : nexacro.BorderObject("1px solid #E0E6EA"),
            								"color" : nexacro.ColorObject("#A9B4BF")
            							}
            						}
            					}
            				}
            			},
            			"cellexpandbutton" :
            			{
            				"parent" :
            				{
            					"GridCellControl" :
            					{
            						"self" :
            						{
            							"enabled" :
            							{
            								"icon" : nexacro.UrlObject("url(\"theme://images/btn_GridExpand_N.png\")")
            							},
            							"focused" :
            							{
            								"icon" : nexacro.UrlObject("url(\"theme://images/btn_GridExpand_N.png\")")
            							},
            							"pushed" :
            							{
            								"icon" : nexacro.UrlObject("url(\"theme://images/btn_GridExpand_N.png\")")
            							}
            						}
            					}
            				}
            			},
            			"treeitembutton" :
            			{
            				"parent" :
            				{
            					"celltreeitem" :
            					{
            						"parent" :
            						{
            							"GridCellControl" :
            							{
            								"self" :
            								{
            									"expand" :
            									{
            										"icon" : nexacro.UrlObject("url(\"theme://images/img_TreeExpand.png\")")
            									},
            									"collapse" :
            									{
            										"icon" : nexacro.UrlObject("url(\"theme://images/img_TreeCollapse.png\")")
            									}
            								}
            							}
            						}
            					}
            				}
            			},
            			"treeitemimage" :
            			{
            				"parent" :
            				{
            					"celltreeitem" :
            					{
            						"parent" :
            						{
            							"GridCellControl" :
            							{
            								"self" :
            								{
            									"expand" :
            									{
            										"icon" : nexacro.UrlObject("url(\"theme://images/img_TreeOpen.png\")")
            									},
            									"collapse" :
            									{
            										"icon" : nexacro.UrlObject("url(\"theme://images/img_TreeClose.png\")")
            									},
            									"leaf" :
            									{
            										"icon" : nexacro.UrlObject("url(\"theme://images/img_TreeItem.png\")")
            									}
            								}
            							}
            						}
            					}
            				}
            			},
            			"celltreeline" :
            			{
            				"parent" :
            				{
            					"GridCellControl" :
            					{
            						"self" :
            						{
            							"enabled" :
            							{
            								"border" : nexacro.BorderObject("1px dotted #C0C0C0")
            							}
            						}
            					}
            				}
            			},
            			"Menu" :
            			{
            				"self" :
            				{
            					"enabled" :
            					{
            						"font" : nexacro.FontObject("bold 22px \"Helvetica\",\"Malgun Gothic\",\"Roboto\",\"Apple SD Gothic Neo\",\"Microsoft NeoGothic\",\"Droid sans\",\"sans-serif\""),
            						"color" : nexacro.ColorObject("#A9B4BF")
            					}
            				}
            			},
            			"menuitem" :
            			{
            				"parent" :
            				{
            					"Menu" :
            					{
            						"self" :
            						{
            							"enabled" :
            							{
            								"padding" : nexacro.PaddingObject("0px 30px 0px 30px")
            							},
            							"selected" :
            							{
            								"color" : nexacro.ColorObject("#FFFFFF")
            							},
            							"disabled" :
            							{
            								"color" : nexacro.ColorObject("#515764")
            							}
            						}
            					}
            				}
            			},
            			"PopupMenu" :
            			{
            				"self" :
            				{
            					"enabled" :
            					{
            						"border" : nexacro.BorderObject("1px solid #272B37")
            					}
            				}
            			},
            			"PopupMenuControl" :
            			{
            				"self" :
            				{
            					"enabled" :
            					{
            						"border" : nexacro.BorderObject("1px solid #272B37")
            					}
            				}
            			},
            			"popupmenuitem" :
            			{
            				"parent" :
            				{
            					"PopupMenu" :
            					{
            						"self" :
            						{
            							"enabled" :
            							{
            								"padding" : nexacro.PaddingObject("7px 15px 7px 15px"),
            								"font" : nexacro.FontObject("18px \"Helvetica\",\"Malgun Gothic\",\"Roboto\",\"Apple SD Gothic Neo\",\"Microsoft NeoGothic\",\"Droid sans\",\"sans-serif\""),
            								"color" : nexacro.ColorObject("#272B37")
            							},
            							"focused" :
            							{
            							},
            							"selected" :
            							{
            							},
            							"disabled" :
            							{
            								"color" : nexacro.ColorObject("#A9B4BF")
            							}
            						}
            					},
            					"PopupMenuControl" :
            					{
            						"self" :
            						{
            							"enabled" :
            							{
            								"padding" : nexacro.PaddingObject("7px 15px 7px 15px"),
            								"font" : nexacro.FontObject("18px \"Helvetica\",\"Malgun Gothic\",\"Roboto\",\"Apple SD Gothic Neo\",\"Microsoft NeoGothic\",\"Droid sans\",\"sans-serif\""),
            								"color" : nexacro.ColorObject("#272B37")
            							},
            							"focused" :
            							{
            							},
            							"selected" :
            							{
            							},
            							"disabled" :
            							{
            								"color" : nexacro.ColorObject("#A9B4BF")
            							}
            						}
            					}
            				}
            			},
            			"popupmenuitemcheckbox" :
            			{
            				"parent" :
            				{
            					"popupmenuitem" :
            					{
            						"parent" :
            						{
            							"PopupMenu" :
            							{
            								"self" :
            								{
            									"disabled" :
            									{
            									}
            								}
            							},
            							"PopupMenuControl" :
            							{
            								"self" :
            								{
            									"disabled" :
            									{
            									}
            								}
            							}
            						}
            					}
            				}
            			},
            			"popupmenuitemexpandimage" :
            			{
            				"parent" :
            				{
            					"popupmenuitem" :
            					{
            						"parent" :
            						{
            							"PopupMenu" :
            							{
            								"self" :
            								{
            									"enabled" :
            									{
            										"icon" : nexacro.UrlObject("url(\"theme://images/ico_menu.png\")"),
            										"padding" : nexacro.PaddingObject("0px")
            									}
            								}
            							},
            							"PopupMenuControl" :
            							{
            								"self" :
            								{
            									"enabled" :
            									{
            										"icon" : nexacro.UrlObject("url(\"theme://images/ico_menu.png\")"),
            										"padding" : nexacro.PaddingObject("0px")
            									}
            								}
            							}
            						}
            					}
            				}
            			},
            			"popupmenuitemtext" :
            			{
            				"parent" :
            				{
            					"popupmenuitem" :
            					{
            						"parent" :
            						{
            							"PopupMenu" :
            							{
            								"self" :
            								{
            									"enabled" :
            									{
            										"padding" : nexacro.PaddingObject("0px 3px 0px 3px")
            									}
            								}
            							},
            							"PopupMenuControl" :
            							{
            								"self" :
            								{
            									"enabled" :
            									{
            										"padding" : nexacro.PaddingObject("0px 3px 0px 3px")
            									}
            								}
            							}
            						}
            					}
            				}
            			},
            			"popupmenuitemhotkeytext" :
            			{
            				"parent" :
            				{
            					"popupmenuitem" :
            					{
            						"parent" :
            						{
            							"PopupMenu" :
            							{
            								"self" :
            								{
            									"enabled" :
            									{
            										"padding" : nexacro.PaddingObject("0px 10px 0px 0px"),
            										"color" : nexacro.ColorObject("#A9B4BF")
            									}
            								}
            							},
            							"PopupMenuControl" :
            							{
            								"self" :
            								{
            									"enabled" :
            									{
            										"padding" : nexacro.PaddingObject("0px 10px 0px 0px"),
            										"color" : nexacro.ColorObject("#A9B4BF")
            									}
            								}
            							}
            						}
            					}
            				}
            			},
            			"Static" :
            			{
            				"self" :
            				{
            					"enabled" :
            					{
            						"wordWrap" : "char"
            					},
            					"disabled" :
            					{
            						"color" : nexacro.ColorObject("#A9B4BF")
            					}
            				}
            			},
            			"ImageViewer" :
            			{
            				"self" :
            				{
            					"enabled" :
            					{
            						"border" : nexacro.BorderObject("1px solid #CCCCCC")
            					}
            				}
            			},
            			"imagetext" :
            			{
            				"parent" :
            				{
            					"ImageViewer" :
            					{
            						"self" :
            						{
            							"disabled" :
            							{
            								"border" : nexacro.BorderObject("1px solid #E0E6EA")
            							}
            						}
            					}
            				}
            			},
            			"Sketch" :
            			{
            				"self" :
            				{
            					"enabled" :
            					{
            						"border" : nexacro.BorderObject("1px solid #CCCCCC"),
            						"color" : nexacro.ColorObject("#272B37")
            					},
            					"disabled" :
            					{
            						"border" : nexacro.BorderObject("1px solid #E0E6EA"),
            						"color" : nexacro.ColorObject("#A9B4BF")
            					}
            				}
            			},
            			"SketchControl" :
            			{
            				"self" :
            				{
            					"enabled" :
            					{
            						"border" : nexacro.BorderObject("1px solid #CCCCCC"),
            						"color" : nexacro.ColorObject("#272B37")
            					},
            					"disabled" :
            					{
            						"border" : nexacro.BorderObject("1px solid #E0E6EA"),
            						"color" : nexacro.ColorObject("#A9B4BF")
            					}
            				}
            			},
            			"ListBox" :
            			{
            				"self" :
            				{
            					"enabled" :
            					{
            						"border" : nexacro.BorderObject("1px solid #CCCCCC")
            					},
            					"disabled" :
            					{
            						"border" : nexacro.BorderObject("1px solid #E0E6EA")
            					}
            				}
            			}
		},
		{
            "includeStatusMap" : true
		}
		);
		var imgcache = nexacro._getImageCacheMaps();
        imgcache[nexacro._getImageLocation("theme://images/btn_min_N.png")] = { width:16, height:16 };
        		imgcache[nexacro._getImageLocation("theme://images/btn_min_D.png")] = { width:16, height:16 };
        		imgcache[nexacro._getImageLocation("theme://images/btn_max_N.png")] = { width:12, height:11 };
        		imgcache[nexacro._getImageLocation("theme://images/btn_max_D.png")] = { width:12, height:11 };
        		imgcache[nexacro._getImageLocation("theme://images/btn_normal_N.png")] = { width:12, height:11 };
        		imgcache[nexacro._getImageLocation("theme://images/btn_normal_D.png")] = { width:12, height:11 };
        		imgcache[nexacro._getImageLocation("theme://images/btn_close_N.png")] = { width:11, height:11 };
        		imgcache[nexacro._getImageLocation("theme://images/btn_close_D.png")] = { width:11, height:11 };
        		imgcache[nexacro._getImageLocation("theme://images/btn_SpinUp_N.png")] = { width:14, height:6 };
        		imgcache[nexacro._getImageLocation("theme://images/btn_SpinUp_D.png")] = { width:14, height:6 };
        		imgcache[nexacro._getImageLocation("theme://images/btn_SpinDown_N.png")] = { width:14, height:6 };
        		imgcache[nexacro._getImageLocation("theme://images/btn_SpinDown_D.png")] = { width:14, height:6 };
        		imgcache[nexacro._getImageLocation("theme://images/btn_drop_N.png")] = { width:14, height:8 };
        		imgcache[nexacro._getImageLocation("theme://images/btn_drop_D.png")] = { width:14, height:8 };
        		imgcache[nexacro._getImageLocation("theme://images/img_check_NN.png")] = { width:34, height:34 };
        		imgcache[nexacro._getImageLocation("theme://images/img_check_DN.png")] = { width:34, height:34 };
        		imgcache[nexacro._getImageLocation("theme://images/img_check_OS.png")] = { width:34, height:34 };
        		imgcache[nexacro._getImageLocation("theme://images/img_check_DS.png")] = { width:34, height:34 };
        		imgcache[nexacro._getImageLocation("theme://images/img_radio_NN.png")] = { width:35, height:35 };
        		imgcache[nexacro._getImageLocation("theme://images/img_radio_DN.png")] = { width:35, height:35 };
        		imgcache[nexacro._getImageLocation("theme://images/img_radio_OS.png")] = { width:35, height:35 };
        		imgcache[nexacro._getImageLocation("theme://images/img_radio_DS.png")] = { width:35, height:35 };
        		imgcache[nexacro._getImageLocation("theme://images/btn_tabNext_N.png")] = { width:8, height:15 };
        		imgcache[nexacro._getImageLocation("theme://images/btn_tabPrev_N.png")] = { width:8, height:15 };
        		imgcache[nexacro._getImageLocation("theme://images/btn_tabExtra_N.png")] = { width:11, height:11 };
        		imgcache[nexacro._getImageLocation("theme://images/btn_tabExtra_D.png")] = { width:11, height:11 };
        		imgcache[nexacro._getImageLocation("theme://images/btn_CalDrop_N.png")] = { width:26, height:28 };
        		imgcache[nexacro._getImageLocation("theme://images/btn_CalDrop_D.png")] = { width:26, height:28 };
        		imgcache[nexacro._getImageLocation("theme://images/btn_prev_N.png")] = { width:13, height:22 };
        		imgcache[nexacro._getImageLocation("theme://images/btn_prev_D.png")] = { width:13, height:22 };
        		imgcache[nexacro._getImageLocation("theme://images/btn_next_N.png")] = { width:13, height:22 };
        		imgcache[nexacro._getImageLocation("theme://images/btn_next_D.png")] = { width:13, height:22 };
        		imgcache[nexacro._getImageLocation("theme://images/btn_GridExpand_N.png")] = { width:26, height:26 };
        		imgcache[nexacro._getImageLocation("theme://images/img_TreeExpand.png")] = { width:16, height:16 };
        		imgcache[nexacro._getImageLocation("theme://images/img_TreeCollapse.png")] = { width:16, height:16 };
        		imgcache[nexacro._getImageLocation("theme://images/img_TreeOpen.png")] = { width:16, height:8 };
        		imgcache[nexacro._getImageLocation("theme://images/img_TreeClose.png")] = { width:8, height:15 };
        		imgcache[nexacro._getImageLocation("theme://images/img_TreeItem.png")] = { width:15, height:14 };
        		imgcache[nexacro._getImageLocation("theme://images/btn_MenuPrev_N.png")] = { width:13, height:22 };
        		imgcache[nexacro._getImageLocation("theme://images/btn_MenuPrev_D.png")] = { width:13, height:22 };
        		imgcache[nexacro._getImageLocation("theme://images/btn_MenuNext_N.png")] = { width:13, height:22 };
        		imgcache[nexacro._getImageLocation("theme://images/btn_MenuNext_D.png")] = { width:13, height:22 };
        		imgcache[nexacro._getImageLocation("theme://images/btn_Pmenuprev_N.png")] = { width:11, height:8 };
        		imgcache[nexacro._getImageLocation("theme://images/btn_Pmenuprev_D.png")] = { width:11, height:8 };
        		imgcache[nexacro._getImageLocation("theme://images/btn_Pmenunext_N.png")] = { width:11, height:8 };
        		imgcache[nexacro._getImageLocation("theme://images/btn_Pmenunext_D.png")] = { width:11, height:8 };
        		imgcache[nexacro._getImageLocation("theme://images/ico_menu_check.png")] = { width:13, height:10 };
        		imgcache[nexacro._getImageLocation("theme://images/ico_menu_checkD.png")] = { width:13, height:10 };
        		imgcache[nexacro._getImageLocation("theme://images/ico_menu.png")] = { width:6, height:9 };
        		imgcache[nexacro._getImageLocation("theme://images/btn_tabNext_D.png")] = { width:8, height:15 };
        		imgcache[nexacro._getImageLocation("theme://images/btn_tabPrev_D.png")] = { width:8, height:15 };
	};
}
)();
