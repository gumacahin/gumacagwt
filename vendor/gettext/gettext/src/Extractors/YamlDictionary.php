<?php

namespace Gettext\Extractors;

use Gettext\Translations;
use Gettext\Utils\DictionaryTrait;
use Symfony\Component\Yaml\Yaml as YamlParser;

/**
 * Class to get gettext strings from yaml.
 */
class YamlDictionary extends Extractor implements ExtractorInterface {

	use DictionaryTrait;

	/**
	 * {@inheritdoc}
	 */
	public static function fromString( $string, Translations $translations, array $options = array() ) {
		$messages = YamlParser::parse( $string );

		if ( is_array( $messages ) ) {
			static::fromArray( $messages, $translations );
		}
	}
}
