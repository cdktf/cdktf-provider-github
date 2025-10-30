/**
 * Copyright (c) HashiCorp, Inc.
 * SPDX-License-Identifier: MPL-2.0
 */

// https://registry.terraform.io/providers/integrations/github/6.7.3/docs/resources/repository_custom_property
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface RepositoryCustomPropertyConfig extends cdktf.TerraformMetaArguments {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/integrations/github/6.7.3/docs/resources/repository_custom_property#id RepositoryCustomProperty#id}
  *
  * Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
  * If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.
  */
  readonly id?: string;
  /**
  * Name of the custom property.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/integrations/github/6.7.3/docs/resources/repository_custom_property#property_name RepositoryCustomProperty#property_name}
  */
  readonly propertyName: string;
  /**
  * Type of the custom property
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/integrations/github/6.7.3/docs/resources/repository_custom_property#property_type RepositoryCustomProperty#property_type}
  */
  readonly propertyType: string;
  /**
  * Value of the custom property.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/integrations/github/6.7.3/docs/resources/repository_custom_property#property_value RepositoryCustomProperty#property_value}
  */
  readonly propertyValue: string[];
  /**
  * Name of the repository which the custom properties should be on.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/integrations/github/6.7.3/docs/resources/repository_custom_property#repository RepositoryCustomProperty#repository}
  */
  readonly repository: string;
}

/**
* Represents a {@link https://registry.terraform.io/providers/integrations/github/6.7.3/docs/resources/repository_custom_property github_repository_custom_property}
*/
export class RepositoryCustomProperty extends cdktf.TerraformResource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "github_repository_custom_property";

  // ==============
  // STATIC Methods
  // ==============
  /**
  * Generates CDKTF code for importing a RepositoryCustomProperty resource upon running "cdktf plan <stack-name>"
  * @param scope The scope in which to define this construct
  * @param importToId The construct id used in the generated config for the RepositoryCustomProperty to import
  * @param importFromId The id of the existing RepositoryCustomProperty that should be imported. Refer to the {@link https://registry.terraform.io/providers/integrations/github/6.7.3/docs/resources/repository_custom_property#import import section} in the documentation of this resource for the id to use
  * @param provider? Optional instance of the provider where the RepositoryCustomProperty to import is found
  */
  public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktf.TerraformProvider) {
        return new cdktf.ImportableResource(scope, importToId, { terraformResourceType: "github_repository_custom_property", importId: importFromId, provider });
      }

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://registry.terraform.io/providers/integrations/github/6.7.3/docs/resources/repository_custom_property github_repository_custom_property} Resource
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options RepositoryCustomPropertyConfig
  */
  public constructor(scope: Construct, id: string, config: RepositoryCustomPropertyConfig) {
    super(scope, id, {
      terraformResourceType: 'github_repository_custom_property',
      terraformGeneratorMetadata: {
        providerName: 'github',
        providerVersion: '6.7.3',
        providerVersionConstraint: '~> 6.0'
      },
      provider: config.provider,
      dependsOn: config.dependsOn,
      count: config.count,
      lifecycle: config.lifecycle,
      provisioners: config.provisioners,
      connection: config.connection,
      forEach: config.forEach
    });
    this._id = config.id;
    this._propertyName = config.propertyName;
    this._propertyType = config.propertyType;
    this._propertyValue = config.propertyValue;
    this._repository = config.repository;
  }

  // ==========
  // ATTRIBUTES
  // ==========

  // id - computed: true, optional: true, required: false
  private _id?: string; 
  public get id() {
    return this.getStringAttribute('id');
  }
  public set id(value: string) {
    this._id = value;
  }
  public resetId() {
    this._id = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get idInput() {
    return this._id;
  }

  // property_name - computed: false, optional: false, required: true
  private _propertyName?: string; 
  public get propertyName() {
    return this.getStringAttribute('property_name');
  }
  public set propertyName(value: string) {
    this._propertyName = value;
  }
  // Temporarily expose input value. Use with caution.
  public get propertyNameInput() {
    return this._propertyName;
  }

  // property_type - computed: false, optional: false, required: true
  private _propertyType?: string; 
  public get propertyType() {
    return this.getStringAttribute('property_type');
  }
  public set propertyType(value: string) {
    this._propertyType = value;
  }
  // Temporarily expose input value. Use with caution.
  public get propertyTypeInput() {
    return this._propertyType;
  }

  // property_value - computed: false, optional: false, required: true
  private _propertyValue?: string[]; 
  public get propertyValue() {
    return cdktf.Fn.tolist(this.getListAttribute('property_value'));
  }
  public set propertyValue(value: string[]) {
    this._propertyValue = value;
  }
  // Temporarily expose input value. Use with caution.
  public get propertyValueInput() {
    return this._propertyValue;
  }

  // repository - computed: false, optional: false, required: true
  private _repository?: string; 
  public get repository() {
    return this.getStringAttribute('repository');
  }
  public set repository(value: string) {
    this._repository = value;
  }
  // Temporarily expose input value. Use with caution.
  public get repositoryInput() {
    return this._repository;
  }

  // =========
  // SYNTHESIS
  // =========

  protected synthesizeAttributes(): { [name: string]: any } {
    return {
      id: cdktf.stringToTerraform(this._id),
      property_name: cdktf.stringToTerraform(this._propertyName),
      property_type: cdktf.stringToTerraform(this._propertyType),
      property_value: cdktf.listMapper(cdktf.stringToTerraform, false)(this._propertyValue),
      repository: cdktf.stringToTerraform(this._repository),
    };
  }

  protected synthesizeHclAttributes(): { [name: string]: any } {
    const attrs = {
      id: {
        value: cdktf.stringToHclTerraform(this._id),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      property_name: {
        value: cdktf.stringToHclTerraform(this._propertyName),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      property_type: {
        value: cdktf.stringToHclTerraform(this._propertyType),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      property_value: {
        value: cdktf.listMapperHcl(cdktf.stringToHclTerraform, false)(this._propertyValue),
        isBlock: false,
        type: "set",
        storageClassType: "stringList",
      },
      repository: {
        value: cdktf.stringToHclTerraform(this._repository),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined ))
  }
}
