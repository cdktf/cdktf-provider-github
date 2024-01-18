/**
 * Copyright (c) HashiCorp, Inc.
 * SPDX-License-Identifier: MPL-2.0
 */

// https://registry.terraform.io/providers/integrations/github/5.44.0/docs/resources/repository_collaborator
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface RepositoryCollaboratorConfig extends cdktf.TerraformMetaArguments {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/integrations/github/5.44.0/docs/resources/repository_collaborator#id RepositoryCollaborator#id}
  *
  * Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
  * If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.
  */
  readonly id?: string;
  /**
  * The permission of the outside collaborator for the repository. Must be one of 'pull', 'push', 'maintain', 'triage' or 'admin' or the name of an existing custom repository role within the organization for organization-owned repositories. Must be 'push' for personal repositories. Defaults to 'push'.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/integrations/github/5.44.0/docs/resources/repository_collaborator#permission RepositoryCollaborator#permission}
  */
  readonly permission?: string;
  /**
  * Suppress plan diffs for triage and maintain. Defaults to 'false'.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/integrations/github/5.44.0/docs/resources/repository_collaborator#permission_diff_suppression RepositoryCollaborator#permission_diff_suppression}
  */
  readonly permissionDiffSuppression?: boolean | cdktf.IResolvable;
  /**
  * The GitHub repository
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/integrations/github/5.44.0/docs/resources/repository_collaborator#repository RepositoryCollaborator#repository}
  */
  readonly repository: string;
  /**
  * The user to add to the repository as a collaborator.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/integrations/github/5.44.0/docs/resources/repository_collaborator#username RepositoryCollaborator#username}
  */
  readonly username: string;
}

/**
* Represents a {@link https://registry.terraform.io/providers/integrations/github/5.44.0/docs/resources/repository_collaborator github_repository_collaborator}
*/
export class RepositoryCollaborator extends cdktf.TerraformResource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "github_repository_collaborator";

  // ==============
  // STATIC Methods
  // ==============
  /**
  * Generates CDKTF code for importing a RepositoryCollaborator resource upon running "cdktf plan <stack-name>"
  * @param scope The scope in which to define this construct
  * @param importToId The construct id used in the generated config for the RepositoryCollaborator to import
  * @param importFromId The id of the existing RepositoryCollaborator that should be imported. Refer to the {@link https://registry.terraform.io/providers/integrations/github/5.44.0/docs/resources/repository_collaborator#import import section} in the documentation of this resource for the id to use
  * @param provider? Optional instance of the provider where the RepositoryCollaborator to import is found
  */
  public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktf.TerraformProvider) {
        return new cdktf.ImportableResource(scope, importToId, { terraformResourceType: "github_repository_collaborator", importId: importFromId, provider });
      }

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://registry.terraform.io/providers/integrations/github/5.44.0/docs/resources/repository_collaborator github_repository_collaborator} Resource
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options RepositoryCollaboratorConfig
  */
  public constructor(scope: Construct, id: string, config: RepositoryCollaboratorConfig) {
    super(scope, id, {
      terraformResourceType: 'github_repository_collaborator',
      terraformGeneratorMetadata: {
        providerName: 'github',
        providerVersion: '5.44.0',
        providerVersionConstraint: '~> 5.0'
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
    this._permission = config.permission;
    this._permissionDiffSuppression = config.permissionDiffSuppression;
    this._repository = config.repository;
    this._username = config.username;
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

  // invitation_id - computed: true, optional: false, required: false
  public get invitationId() {
    return this.getStringAttribute('invitation_id');
  }

  // permission - computed: false, optional: true, required: false
  private _permission?: string; 
  public get permission() {
    return this.getStringAttribute('permission');
  }
  public set permission(value: string) {
    this._permission = value;
  }
  public resetPermission() {
    this._permission = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get permissionInput() {
    return this._permission;
  }

  // permission_diff_suppression - computed: false, optional: true, required: false
  private _permissionDiffSuppression?: boolean | cdktf.IResolvable; 
  public get permissionDiffSuppression() {
    return this.getBooleanAttribute('permission_diff_suppression');
  }
  public set permissionDiffSuppression(value: boolean | cdktf.IResolvable) {
    this._permissionDiffSuppression = value;
  }
  public resetPermissionDiffSuppression() {
    this._permissionDiffSuppression = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get permissionDiffSuppressionInput() {
    return this._permissionDiffSuppression;
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

  // username - computed: false, optional: false, required: true
  private _username?: string; 
  public get username() {
    return this.getStringAttribute('username');
  }
  public set username(value: string) {
    this._username = value;
  }
  // Temporarily expose input value. Use with caution.
  public get usernameInput() {
    return this._username;
  }

  // =========
  // SYNTHESIS
  // =========

  protected synthesizeAttributes(): { [name: string]: any } {
    return {
      id: cdktf.stringToTerraform(this._id),
      permission: cdktf.stringToTerraform(this._permission),
      permission_diff_suppression: cdktf.booleanToTerraform(this._permissionDiffSuppression),
      repository: cdktf.stringToTerraform(this._repository),
      username: cdktf.stringToTerraform(this._username),
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
      permission: {
        value: cdktf.stringToHclTerraform(this._permission),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      permission_diff_suppression: {
        value: cdktf.booleanToHclTerraform(this._permissionDiffSuppression),
        isBlock: false,
        type: "simple",
        storageClassType: "boolean",
      },
      repository: {
        value: cdktf.stringToHclTerraform(this._repository),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      username: {
        value: cdktf.stringToHclTerraform(this._username),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined ))
  }
}
