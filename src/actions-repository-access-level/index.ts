/**
 * Copyright (c) HashiCorp, Inc.
 * SPDX-License-Identifier: MPL-2.0
 */

// https://registry.terraform.io/providers/integrations/github/6.0.0/docs/resources/actions_repository_access_level
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface ActionsRepositoryAccessLevelConfig extends cdktf.TerraformMetaArguments {
  /**
  * Where the actions or reusable workflows of the repository may be used. Possible values are 'none', 'user', 'organization', or 'enterprise'.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/integrations/github/6.0.0/docs/resources/actions_repository_access_level#access_level ActionsRepositoryAccessLevel#access_level}
  */
  readonly accessLevel: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/integrations/github/6.0.0/docs/resources/actions_repository_access_level#id ActionsRepositoryAccessLevel#id}
  *
  * Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
  * If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.
  */
  readonly id?: string;
  /**
  * The GitHub repository.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/integrations/github/6.0.0/docs/resources/actions_repository_access_level#repository ActionsRepositoryAccessLevel#repository}
  */
  readonly repository: string;
}

/**
* Represents a {@link https://registry.terraform.io/providers/integrations/github/6.0.0/docs/resources/actions_repository_access_level github_actions_repository_access_level}
*/
export class ActionsRepositoryAccessLevel extends cdktf.TerraformResource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "github_actions_repository_access_level";

  // ==============
  // STATIC Methods
  // ==============
  /**
  * Generates CDKTF code for importing a ActionsRepositoryAccessLevel resource upon running "cdktf plan <stack-name>"
  * @param scope The scope in which to define this construct
  * @param importToId The construct id used in the generated config for the ActionsRepositoryAccessLevel to import
  * @param importFromId The id of the existing ActionsRepositoryAccessLevel that should be imported. Refer to the {@link https://registry.terraform.io/providers/integrations/github/6.0.0/docs/resources/actions_repository_access_level#import import section} in the documentation of this resource for the id to use
  * @param provider? Optional instance of the provider where the ActionsRepositoryAccessLevel to import is found
  */
  public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktf.TerraformProvider) {
        return new cdktf.ImportableResource(scope, importToId, { terraformResourceType: "github_actions_repository_access_level", importId: importFromId, provider });
      }

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://registry.terraform.io/providers/integrations/github/6.0.0/docs/resources/actions_repository_access_level github_actions_repository_access_level} Resource
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options ActionsRepositoryAccessLevelConfig
  */
  public constructor(scope: Construct, id: string, config: ActionsRepositoryAccessLevelConfig) {
    super(scope, id, {
      terraformResourceType: 'github_actions_repository_access_level',
      terraformGeneratorMetadata: {
        providerName: 'github',
        providerVersion: '6.0.0',
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
    this._accessLevel = config.accessLevel;
    this._id = config.id;
    this._repository = config.repository;
  }

  // ==========
  // ATTRIBUTES
  // ==========

  // access_level - computed: false, optional: false, required: true
  private _accessLevel?: string; 
  public get accessLevel() {
    return this.getStringAttribute('access_level');
  }
  public set accessLevel(value: string) {
    this._accessLevel = value;
  }
  // Temporarily expose input value. Use with caution.
  public get accessLevelInput() {
    return this._accessLevel;
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
      access_level: cdktf.stringToTerraform(this._accessLevel),
      id: cdktf.stringToTerraform(this._id),
      repository: cdktf.stringToTerraform(this._repository),
    };
  }

  protected synthesizeHclAttributes(): { [name: string]: any } {
    const attrs = {
      access_level: {
        value: cdktf.stringToHclTerraform(this._accessLevel),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      id: {
        value: cdktf.stringToHclTerraform(this._id),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
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
