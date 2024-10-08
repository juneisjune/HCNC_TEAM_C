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
            									"font" : nexacro.FontObject("bold 12px/1.2 \"Arial\"")
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
