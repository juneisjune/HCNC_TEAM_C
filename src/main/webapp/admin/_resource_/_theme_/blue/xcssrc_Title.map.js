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
            									"font" : nexacro.FontObject("bold 30px/1.2 \"Arial\"")
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
