/**
 * Copyright (c) HashiCorp, Inc.
 * SPDX-License-Identifier: MPL-2.0
 */

// https://registry.terraform.io/providers/integrations/github/6.8.0/docs/resources/actions_organization_secret_repository
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface ActionsOrganizationSecretRepositoryConfig extends cdktf.TerraformMetaArguments {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/integrations/github/6.8.0/docs/resources/actions_organization_secret_repository#id ActionsOrganizationSecretRepository#id}
  *
  * Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
  * If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.
  */
  readonly id?: string;
  /**
  * The repository ID that can access the organization secret.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/integrations/github/6.8.0/docs/resources/actions_organization_secret_repository#repository_id ActionsOrganizationSecretRepository#repository_id}
  */
  readonly repositoryId: number;
  /**
  * Name of the existing secret.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/integrations/github/6.8.0/docs/resources/actions_organization_secret_repository#secret_name ActionsOrganizationSecretRepository#secret_name}
  */
  readonly secretName: string;
}

/**
* Represents a {@link https://registry.terraform.io/providers/integrations/github/6.8.0/docs/resources/actions_organization_secret_repository github_actions_organization_secret_repository}
*/
export class ActionsOrganizationSecretRepository extends cdktf.TerraformResource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "github_actions_organization_secret_repository";

  // ==============
  // STATIC Methods
  // ==============
  /**
  * Generates CDKTF code for importing a ActionsOrganizationSecretRepository resource upon running "cdktf plan <stack-name>"
  * @param scope The scope in which to define this construct
  * @param importToId The construct id used in the generated config for the ActionsOrganizationSecretRepository to import
  * @param importFromId The id of the existing ActionsOrganizationSecretRepository that should be imported. Refer to the {@link https://registry.terraform.io/providers/integrations/github/6.8.0/docs/resources/actions_organization_secret_repository#import import section} in the documentation of this resource for the id to use
  * @param provider? Optional instance of the provider where the ActionsOrganizationSecretRepository to import is found
  */
  public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktf.TerraformProvider) {
        return new cdktf.ImportableResource(scope, importToId, { terraformResourceType: "github_actions_organization_secret_repository", importId: importFromId, provider });
      }

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://registry.terraform.io/providers/integrations/github/6.8.0/docs/resources/actions_organization_secret_repository github_actions_organization_secret_repository} Resource
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options ActionsOrganizationSecretRepositoryConfig
  */
  public constructor(scope: Construct, id: string, config: ActionsOrganizationSecretRepositoryConfig) {
    super(scope, id, {
      terraformResourceType: 'github_actions_organization_secret_repository',
      terraformGeneratorMetadata: {
        providerName: 'github',
        providerVersion: '6.8.0',
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
    this._repositoryId = config.repositoryId;
    this._secretName = config.secretName;
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

  // repository_id - computed: false, optional: false, required: true
  private _repositoryId?: number; 
  public get repositoryId() {
    return this.getNumberAttribute('repository_id');
  }
  public set repositoryId(value: number) {
    this._repositoryId = value;
  }
  // Temporarily expose input value. Use with caution.
  public get repositoryIdInput() {
    return this._repositoryId;
  }

  // secret_name - computed: false, optional: false, required: true
  private _secretName?: string; 
  public get secretName() {
    return this.getStringAttribute('secret_name');
  }
  public set secretName(value: string) {
    this._secretName = value;
  }
  // Temporarily expose input value. Use with caution.
  public get secretNameInput() {
    return this._secretName;
  }

  // =========
  // SYNTHESIS
  // =========

  protected synthesizeAttributes(): { [name: string]: any } {
    return {
      id: cdktf.stringToTerraform(this._id),
      repository_id: cdktf.numberToTerraform(this._repositoryId),
      secret_name: cdktf.stringToTerraform(this._secretName),
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
      repository_id: {
        value: cdktf.numberToHclTerraform(this._repositoryId),
        isBlock: false,
        type: "simple",
        storageClassType: "number",
      },
      secret_name: {
        value: cdktf.stringToHclTerraform(this._secretName),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined ))
  }
}
