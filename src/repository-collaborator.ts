// https://www.terraform.io/docs/providers/github/r/repository_collaborator.html
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface RepositoryCollaboratorConfig extends cdktf.TerraformMetaArguments {
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/github/r/repository_collaborator.html#permission RepositoryCollaborator#permission}
  */
  readonly permission?: string;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/github/r/repository_collaborator.html#permission_diff_suppression RepositoryCollaborator#permission_diff_suppression}
  */
  readonly permissionDiffSuppression?: boolean | cdktf.IResolvable;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/github/r/repository_collaborator.html#repository RepositoryCollaborator#repository}
  */
  readonly repository: string;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/github/r/repository_collaborator.html#username RepositoryCollaborator#username}
  */
  readonly username: string;
}

/**
* Represents a {@link https://www.terraform.io/docs/providers/github/r/repository_collaborator.html github_repository_collaborator}
*/
export class RepositoryCollaborator extends cdktf.TerraformResource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType: string = "github_repository_collaborator";

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://www.terraform.io/docs/providers/github/r/repository_collaborator.html github_repository_collaborator} Resource
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options RepositoryCollaboratorConfig
  */
  public constructor(scope: Construct, id: string, config: RepositoryCollaboratorConfig) {
    super(scope, id, {
      terraformResourceType: 'github_repository_collaborator',
      terraformGeneratorMetadata: {
        providerName: 'github'
      },
      provider: config.provider,
      dependsOn: config.dependsOn,
      count: config.count,
      lifecycle: config.lifecycle
    });
    this._permission = config.permission;
    this._permissionDiffSuppression = config.permissionDiffSuppression;
    this._repository = config.repository;
    this._username = config.username;
  }

  // ==========
  // ATTRIBUTES
  // ==========

  // id - computed: true, optional: true, required: false
  public get id() {
    return this.getStringAttribute('id');
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
  public set permission(value: string ) {
    this._permission = value;
  }
  public resetPermission() {
    this._permission = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get permissionInput() {
    return this._permission
  }

  // permission_diff_suppression - computed: false, optional: true, required: false
  private _permissionDiffSuppression?: boolean | cdktf.IResolvable;
  public get permissionDiffSuppression() {
    return this.getBooleanAttribute('permission_diff_suppression');
  }
  public set permissionDiffSuppression(value: boolean | cdktf.IResolvable ) {
    this._permissionDiffSuppression = value;
  }
  public resetPermissionDiffSuppression() {
    this._permissionDiffSuppression = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get permissionDiffSuppressionInput() {
    return this._permissionDiffSuppression
  }

  // repository - computed: false, optional: false, required: true
  private _repository: string;
  public get repository() {
    return this.getStringAttribute('repository');
  }
  public set repository(value: string) {
    this._repository = value;
  }
  // Temporarily expose input value. Use with caution.
  public get repositoryInput() {
    return this._repository
  }

  // username - computed: false, optional: false, required: true
  private _username: string;
  public get username() {
    return this.getStringAttribute('username');
  }
  public set username(value: string) {
    this._username = value;
  }
  // Temporarily expose input value. Use with caution.
  public get usernameInput() {
    return this._username
  }

  // =========
  // SYNTHESIS
  // =========

  protected synthesizeAttributes(): { [name: string]: any } {
    return {
      permission: cdktf.stringToTerraform(this._permission),
      permission_diff_suppression: cdktf.booleanToTerraform(this._permissionDiffSuppression),
      repository: cdktf.stringToTerraform(this._repository),
      username: cdktf.stringToTerraform(this._username),
    };
  }
}
