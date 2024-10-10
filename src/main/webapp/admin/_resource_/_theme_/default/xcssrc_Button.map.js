(function()
{
	return function()
	{
		nexacro._setCSSMaps(
		{
            "Button" :
            			{
            				"class" :
            				[
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
