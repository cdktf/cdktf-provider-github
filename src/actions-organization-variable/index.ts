// https://registry.terraform.io/providers/integrations/github/6.2.3/docs/resources/actions_organization_variable
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface ActionsOrganizationVariableConfig extends cdktf.TerraformMetaArguments {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/integrations/github/6.2.3/docs/resources/actions_organization_variable#id ActionsOrganizationVariable#id}
  *
  * Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
  * If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.
  */
  readonly id?: string;
  /**
  * An array of repository ids that can access the organization variable.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/integrations/github/6.2.3/docs/resources/actions_organization_variable#selected_repository_ids ActionsOrganizationVariable#selected_repository_ids}
  */
  readonly selectedRepositoryIds?: number[];
  /**
  * Value of the variable.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/integrations/github/6.2.3/docs/resources/actions_organization_variable#value ActionsOrganizationVariable#value}
  */
  readonly value: string;
  /**
  * Name of the variable.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/integrations/github/6.2.3/docs/resources/actions_organization_variable#variable_name ActionsOrganizationVariable#variable_name}
  */
  readonly variableName: string;
  /**
  * Configures the access that repositories have to the organization variable. Must be one of 'all', 'private', or 'selected'. 'selected_repository_ids' is required if set to 'selected'.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/integrations/github/6.2.3/docs/resources/actions_organization_variable#visibility ActionsOrganizationVariable#visibility}
  */
  readonly visibility: string;
}

/**
* Represents a {@link https://registry.terraform.io/providers/integrations/github/6.2.3/docs/resources/actions_organization_variable github_actions_organization_variable}
*/
export class ActionsOrganizationVariable extends cdktf.TerraformResource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "github_actions_organization_variable";

  // ==============
  // STATIC Methods
  // ==============
  /**
  * Generates CDKTF code for importing a ActionsOrganizationVariable resource upon running "cdktf plan <stack-name>"
  * @param scope The scope in which to define this construct
  * @param importToId The construct id used in the generated config for the ActionsOrganizationVariable to import
  * @param importFromId The id of the existing ActionsOrganizationVariable that should be imported. Refer to the {@link https://registry.terraform.io/providers/integrations/github/6.2.3/docs/resources/actions_organization_variable#import import section} in the documentation of this resource for the id to use
  * @param provider? Optional instance of the provider where the ActionsOrganizationVariable to import is found
  */
  public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktf.TerraformProvider) {
        return new cdktf.ImportableResource(scope, importToId, { terraformResourceType: "github_actions_organization_variable", importId: importFromId, provider });
      }

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://registry.terraform.io/providers/integrations/github/6.2.3/docs/resources/actions_organization_variable github_actions_organization_variable} Resource
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options ActionsOrganizationVariableConfig
  */
  public constructor(scope: Construct, id: string, config: ActionsOrganizationVariableConfig) {
    super(scope, id, {
      terraformResourceType: 'github_actions_organization_variable',
      terraformGeneratorMetadata: {
        providerName: 'github',
        providerVersion: '6.2.3',
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
    this._selectedRepositoryIds = config.selectedRepositoryIds;
    this._value = config.value;
    this._variableName = config.variableName;
    this._visibility = config.visibility;
  }

  // ==========
  // ATTRIBUTES
  // ==========

  // created_at - computed: true, optional: false, required: false
  public get createdAt() {
    return this.getStringAttribute('created_at');
  }

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

  // selected_repository_ids - computed: false, optional: true, required: false
  private _selectedRepositoryIds?: number[]; 
  public get selectedRepositoryIds() {
    return cdktf.Token.asNumberList(cdktf.Fn.tolist(this.getNumberListAttribute('selected_repository_ids')));
  }
  public set selectedRepositoryIds(value: number[]) {
    this._selectedRepositoryIds = value;
  }
  public resetSelectedRepositoryIds() {
    this._selectedRepositoryIds = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get selectedRepositoryIdsInput() {
    return this._selectedRepositoryIds;
  }

  // updated_at - computed: true, optional: false, required: false
  public get updatedAt() {
    return this.getStringAttribute('updated_at');
  }

  // value - computed: false, optional: false, required: true
  private _value?: string; 
  public get value() {
    return this.getStringAttribute('value');
  }
  public set value(value: string) {
    this._value = value;
  }
  // Temporarily expose input value. Use with caution.
  public get valueInput() {
    return this._value;
  }

  // variable_name - computed: false, optional: false, required: true
  private _variableName?: string; 
  public get variableName() {
    return this.getStringAttribute('variable_name');
  }
  public set variableName(value: string) {
    this._variableName = value;
  }
  // Temporarily expose input value. Use with caution.
  public get variableNameInput() {
    return this._variableName;
  }

  // visibility - computed: false, optional: false, required: true
  private _visibility?: string; 
  public get visibility() {
    return this.getStringAttribute('visibility');
  }
  public set visibility(value: string) {
    this._visibility = value;
  }
  // Temporarily expose input value. Use with caution.
  public get visibilityInput() {
    return this._visibility;
  }

  // =========
  // SYNTHESIS
  // =========

  protected synthesizeAttributes(): { [name: string]: any } {
    return {
      id: cdktf.stringToTerraform(this._id),
      selected_repository_ids: cdktf.listMapper(cdktf.numberToTerraform, false)(this._selectedRepositoryIds),
      value: cdktf.stringToTerraform(this._value),
      variable_name: cdktf.stringToTerraform(this._variableName),
      visibility: cdktf.stringToTerraform(this._visibility),
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
      selected_repository_ids: {
        value: cdktf.listMapperHcl(cdktf.numberToHclTerraform, false)(this._selectedRepositoryIds),
        isBlock: false,
        type: "set",
        storageClassType: "numberList",
      },
      value: {
        value: cdktf.stringToHclTerraform(this._value),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      variable_name: {
        value: cdktf.stringToHclTerraform(this._variableName),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      visibility: {
        value: cdktf.stringToHclTerraform(this._visibility),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined ))
  }
}
