(function()
{
	return function()
	{
		nexacro._setCSSMaps(
		{
            "Static" :
            			{
            				"class" :
            				[
            					{
            						"stc_title" :
            						{
            							"self" :
            							{
            								"enabled" :
            								{
            									"border" : nexacro.BorderObject("0px none,0px none,1px solid gray"),
            									"padding" : nexacro.PaddingObject("0px"),
            									"color" : nexacro.ColorObject("#000000"),
            									"font" : nexacro.FontObject("bold 25px/1.2 \"Arial\"")
            								}
            							}
            						}
            					},
            					{
            						"stc_popup" :
            						{
            							"self" :
            							{
            								"enabled" :
            								{
            									"color" : nexacro.ColorObject("#000000"),
            									"font" : nexacro.FontObject("bold 22px/1.2 \"Arial\"")
            								}
            							}
            						}
            					},
            					{
            						"stc_stc" :
            						{
            							"self" :
            							{
            								"enabled" :
            								{
            									"font" : nexacro.FontObject("normal 14px/normal \"Arial\"")
            								}
            							}
            						}
            					}
            				]
            			},
            			"Button" :
            			{
            				"class" :
            				[
            					{
            						"btn_check" :
            						{
            							"self" :
            							{
            								"enabled" :
            								{
            									"font" : nexacro.FontObject("normal bold  12pt/normal \"Arial\""),
            									"color" : nexacro.ColorObject("#121212"),
            									"icon" : nexacro.UrlObject("url('theme://images/chk_WF_Box_F.png')"),
            									"textPadding" : nexacro.PaddingObject("0px 0px 0px 5px")
            								}
            							}
            						}
            					},
            					{
            						"btn_delete" :
            						{
            							"self" :
            							{
            								"enabled" :
            								{
            									"font" : nexacro.FontObject("normal bold  12pt/normal \"Arial\""),
            									"color" : nexacro.ColorObject("#121212"),
            									"icon" : nexacro.UrlObject("url('imagerc::btn_mdi_close2.png')"),
            									"textPadding" : nexacro.PaddingObject("0px 0px 0px 5px")
            								}
            							}
            						}
            					},
            					{
            						"btn_download" :
            						{
            							"self" :
            							{
            								"enabled" :
            								{
            									"font" : nexacro.FontObject("normal bold  12pt/normal \"Arial\""),
            									"color" : nexacro.ColorObject("#121212"),
            									"textPadding" : nexacro.PaddingObject("0px 0px 0px 5px"),
            									"icon" : nexacro.UrlObject("url('imagerc::img_WF_save01.png')")
            								}
            							}
            						}
            					},
            					{
            						"btn_edit" :
            						{
            							"self" :
            							{
            								"enabled" :
            								{
            									"font" : nexacro.FontObject("normal 700 12pt /normal \"Arial\""),
            									"color" : nexacro.ColorObject("#121212"),
            									"textPadding" : nexacro.PaddingObject("0px 0px 0px 5px"),
            									"icon" : nexacro.UrlObject("url('imagerc::edit.png')")
            								}
            							}
            						}
            					},
            					{
            						"btn_normal" :
            						{
            							"self" :
            							{
            								"enabled" :
            								{
            									"font" : nexacro.FontObject("normal 700 12pt /normal \"Arial\""),
            									"color" : nexacro.ColorObject("#121212")
            								}
            							}
            						}
            					},
            					{
            						"btn_regist" :
            						{
            							"self" :
            							{
            								"enabled" :
            								{
            									"font" : nexacro.FontObject("normal bold  12pt/normal \"Arial\""),
            									"color" : nexacro.ColorObject("#121212"),
            									"textPadding" : nexacro.PaddingObject("0px 0px 0px 5px"),
            									"icon" : nexacro.UrlObject("url('imagerc::plus1.png')")
            								}
            							}
            						}
            					},
            					{
            						"btn_search" :
            						{
            							"self" :
            							{
            								"enabled" :
            								{
            									"icon" : nexacro.UrlObject("url('imagerc::img_WF_search01.png')"),
            									"iconPosition" : "left",
            									"color" : nexacro.ColorObject("#121212"),
            									"textPadding" : nexacro.PaddingObject("0px 0px 0px 5px"),
            									"font" : nexacro.FontObject("normal bold  10pt/normal \"Arial\"")
            								}
            							}
            						}
            					}
            				]
            			}
		},
		{
            "includeStatusMap" : true
		}
		);
		var imgcache = nexacro._getImageCacheMaps();

	};
}
)();
