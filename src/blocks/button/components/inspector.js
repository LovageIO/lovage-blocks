/**
 * Inspector Controls
 */

// Setup the block
const { __ } = wp.i18n;
const { Component } = wp.element;

// Import block components
const { InspectorControls } = wp.editor;

// Import Inspector components
const {
	Panel,
	PanelBody,
	PanelHeader,
	RangeControl,
	SelectControl,
	ColorPicker,
	ToggleControl
} = wp.components;

// Create an Inspector Controls wrapper Component
export default class Inspector extends Component {

	constructor( props ) {
		super( ...arguments );
	}

	render() {

		// Setup the attributes
		const {
		  buttonShape,
		  buttonFontSize,
		  buttonBackgroundColor,
		  buttonTextColor,
		  buttonSize,
		  buttonTarget
		} = this.props.attributes;

		const { setAttributes } = this.props;

		// shape options
		const ShapeOptions = [
			{ value: 'square', label: __( 'Square' ) },
			{ value: 'round',  label: __( 'Round' ) },
			{ value: 'rounded',  label: __( 'Rounded' ) },
		];

		return (
		<InspectorControls key="inspector">

			<PanelBody title={ __('Link Target', 'elegant-blocks') } initialOpen={ false }>
				<ToggleControl
					label={ __( 'Open link in new window', 'elegant-blocks' ) }
					checked={ buttonTarget }
					onChange={ () => this.props.setAttributes( { buttonTarget: ! buttonTarget } ) }
				/>
			</PanelBody>

			<PanelBody title={ __('Button Shape', 'elegant-blocks') } initialOpen={ false }>
				<SelectControl
					description={ __( 'Choose between a round, rounded or square button shape.' ) }
					options={ ShapeOptions }
					value={ buttonShape }
					onChange={ ( value ) => this.props.setAttributes( { buttonShape: value } ) }
				/>
			</PanelBody>

			<PanelBody title={ __('Button Background Color', 'elegant-blocks') } initialOpen={ false }>
			    <ColorPicker
		            color={ buttonBackgroundColor }
		            onChangeComplete={ (value) => setAttributes( { buttonBackgroundColor: value.hex } ) }
		        />
			</PanelBody>

			<PanelBody title={ __('Button Text Color', 'elegant-blocks') } initialOpen={ false }>
			    <ColorPicker
		            color={ buttonTextColor }
		            onChangeComplete={ (value) => setAttributes( { buttonTextColor: value.hex } ) }
		        />
			</PanelBody>

			<PanelBody title={ __('Button Font Size', 'elegant-blocks') } initialOpen={ false }>
				<RangeControl
					value={ buttonFontSize }
					onChange={ ( value ) => this.props.setAttributes( { buttonFontSize: value } ) }
					min={ 14 }
					max={ 25 }
					step={ 1 }
				/>
			</PanelBody>

			<PanelBody title={ __('Button Size', 'elegant-blocks') } initialOpen={ false }>
				<RangeControl
					value={ buttonSize }
					onChange={ ( value ) => this.props.setAttributes( { buttonSize: value } ) }
					min={ 5 }
					max={ 20 }
					step={ 1 }
				/>
			</PanelBody>

		</InspectorControls>
		);
	}
}
