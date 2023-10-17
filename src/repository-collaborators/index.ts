/**
 * Copyright (c) HashiCorp, Inc.
 * SPDX-License-Identifier: MPL-2.0
 */

// https://registry.terraform.io/providers/integrations/github/5.40.0/docs/resources/repository_collaborators
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface RepositoryCollaboratorsConfig extends cdktf.TerraformMetaArguments {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/integrations/github/5.40.0/docs/resources/repository_collaborators#id RepositoryCollaborators#id}
  *
  * Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
  * If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.
  */
  readonly id?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/integrations/github/5.40.0/docs/resources/repository_collaborators#repository RepositoryCollaborators#repository}
  */
  readonly repository: string;
  /**
  * team block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/integrations/github/5.40.0/docs/resources/repository_collaborators#team RepositoryCollaborators#team}
  */
  readonly team?: RepositoryCollaboratorsTeam[] | cdktf.IResolvable;
  /**
  * user block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/integrations/github/5.40.0/docs/resources/repository_collaborators#user RepositoryCollaborators#user}
  */
  readonly user?: RepositoryCollaboratorsUser[] | cdktf.IResolvable;
}
export interface RepositoryCollaboratorsTeam {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/integrations/github/5.40.0/docs/resources/repository_collaborators#permission RepositoryCollaborators#permission}
  */
  readonly permission?: string;
  /**
  * Team ID or slug to add to the repository as a collaborator.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/integrations/github/5.40.0/docs/resources/repository_collaborators#team_id RepositoryCollaborators#team_id}
  */
  readonly teamId: string;
}

export function repositoryCollaboratorsTeamToTerraform(struct?: RepositoryCollaboratorsTeam | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    permission: cdktf.stringToTerraform(struct!.permission),
    team_id: cdktf.stringToTerraform(struct!.teamId),
  }
}

export class RepositoryCollaboratorsTeamOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  * @param complexObjectIndex the index of this item in the list
  * @param complexObjectIsFromSet whether the list is wrapping a set (will add tolist() to be able to access an item via an index)
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string, complexObjectIndex: number, complexObjectIsFromSet: boolean) {
    super(terraformResource, terraformAttribute, complexObjectIsFromSet, complexObjectIndex);
  }

  public get internalValue(): RepositoryCollaboratorsTeam | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._permission !== undefined) {
      hasAnyValues = true;
      internalValueResult.permission = this._permission;
    }
    if (this._teamId !== undefined) {
      hasAnyValues = true;
      internalValueResult.teamId = this._teamId;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: RepositoryCollaboratorsTeam | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._permission = undefined;
      this._teamId = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._permission = value.permission;
      this._teamId = value.teamId;
    }
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

  // team_id - computed: false, optional: false, required: true
  private _teamId?: string; 
  public get teamId() {
    return this.getStringAttribute('team_id');
  }
  public set teamId(value: string) {
    this._teamId = value;
  }
  // Temporarily expose input value. Use with caution.
  public get teamIdInput() {
    return this._teamId;
  }
}

export class RepositoryCollaboratorsTeamList extends cdktf.ComplexList {
  public internalValue? : RepositoryCollaboratorsTeam[] | cdktf.IResolvable

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  * @param wrapsSet whether the list is wrapping a set (will add tolist() to be able to access an item via an index)
  */
  constructor(protected terraformResource: cdktf.IInterpolatingParent, protected terraformAttribute: string, protected wrapsSet: boolean) {
    super(terraformResource, terraformAttribute, wrapsSet)
  }

  /**
  * @param index the index of the item to return
  */
  public get(index: number): RepositoryCollaboratorsTeamOutputReference {
    return new RepositoryCollaboratorsTeamOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface RepositoryCollaboratorsUser {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/integrations/github/5.40.0/docs/resources/repository_collaborators#permission RepositoryCollaborators#permission}
  */
  readonly permission?: string;
  /**
  * (Required) The user to add to the repository as a collaborator.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/integrations/github/5.40.0/docs/resources/repository_collaborators#username RepositoryCollaborators#username}
  */
  readonly username: string;
}

export function repositoryCollaboratorsUserToTerraform(struct?: RepositoryCollaboratorsUser | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    permission: cdktf.stringToTerraform(struct!.permission),
    username: cdktf.stringToTerraform(struct!.username),
  }
}

export class RepositoryCollaboratorsUserOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  * @param complexObjectIndex the index of this item in the list
  * @param complexObjectIsFromSet whether the list is wrapping a set (will add tolist() to be able to access an item via an index)
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string, complexObjectIndex: number, complexObjectIsFromSet: boolean) {
    super(terraformResource, terraformAttribute, complexObjectIsFromSet, complexObjectIndex);
  }

  public get internalValue(): RepositoryCollaboratorsUser | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._permission !== undefined) {
      hasAnyValues = true;
      internalValueResult.permission = this._permission;
    }
    if (this._username !== undefined) {
      hasAnyValues = true;
      internalValueResult.username = this._username;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: RepositoryCollaboratorsUser | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._permission = undefined;
      this._username = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._permission = value.permission;
      this._username = value.username;
    }
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
}

export class RepositoryCollaboratorsUserList extends cdktf.ComplexList {
  public internalValue? : RepositoryCollaboratorsUser[] | cdktf.IResolvable

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  * @param wrapsSet whether the list is wrapping a set (will add tolist() to be able to access an item via an index)
  */
  constructor(protected terraformResource: cdktf.IInterpolatingParent, protected terraformAttribute: string, protected wrapsSet: boolean) {
    super(terraformResource, terraformAttribute, wrapsSet)
  }

  /**
  * @param index the index of the item to return
  */
  public get(index: number): RepositoryCollaboratorsUserOutputReference {
    return new RepositoryCollaboratorsUserOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}

/**
* Represents a {@link https://registry.terraform.io/providers/integrations/github/5.40.0/docs/resources/repository_collaborators github_repository_collaborators}
*/
export class RepositoryCollaborators extends cdktf.TerraformResource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "github_repository_collaborators";

  // ==============
  // STATIC Methods
  // ==============
  /**
  * Generates CDKTF code for importing a RepositoryCollaborators resource upon running "cdktf plan <stack-name>"
  * @param scope The scope in which to define this construct
  * @param importToId The construct id used in the generated config for the RepositoryCollaborators to import
  * @param importFromId The id of the existing RepositoryCollaborators that should be imported. Refer to the {@link https://registry.terraform.io/providers/integrations/github/5.40.0/docs/resources/repository_collaborators#import import section} in the documentation of this resource for the id to use
  * @param provider? Optional instance of the provider where the RepositoryCollaborators to import is found
  */
  public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktf.TerraformProvider) {
        return new cdktf.ImportableResource(scope, importToId, { terraformResourceType: "github_repository_collaborators", importId: importFromId, provider });
      }

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://registry.terraform.io/providers/integrations/github/5.40.0/docs/resources/repository_collaborators github_repository_collaborators} Resource
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options RepositoryCollaboratorsConfig
  */
  public constructor(scope: Construct, id: string, config: RepositoryCollaboratorsConfig) {
    super(scope, id, {
      terraformResourceType: 'github_repository_collaborators',
      terraformGeneratorMetadata: {
        providerName: 'github',
        providerVersion: '5.40.0',
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
    this._repository = config.repository;
    this._team.internalValue = config.team;
    this._user.internalValue = config.user;
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

  // invitation_ids - computed: true, optional: false, required: false
  private _invitationIds = new cdktf.StringMap(this, "invitation_ids");
  public get invitationIds() {
    return this._invitationIds;
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

  // team - computed: false, optional: true, required: false
  private _team = new RepositoryCollaboratorsTeamList(this, "team", true);
  public get team() {
    return this._team;
  }
  public putTeam(value: RepositoryCollaboratorsTeam[] | cdktf.IResolvable) {
    this._team.internalValue = value;
  }
  public resetTeam() {
    this._team.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get teamInput() {
    return this._team.internalValue;
  }

  // user - computed: false, optional: true, required: false
  private _user = new RepositoryCollaboratorsUserList(this, "user", true);
  public get user() {
    return this._user;
  }
  public putUser(value: RepositoryCollaboratorsUser[] | cdktf.IResolvable) {
    this._user.internalValue = value;
  }
  public resetUser() {
    this._user.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get userInput() {
    return this._user.internalValue;
  }

  // =========
  // SYNTHESIS
  // =========

  protected synthesizeAttributes(): { [name: string]: any } {
    return {
      id: cdktf.stringToTerraform(this._id),
      repository: cdktf.stringToTerraform(this._repository),
      team: cdktf.listMapper(repositoryCollaboratorsTeamToTerraform, true)(this._team.internalValue),
      user: cdktf.listMapper(repositoryCollaboratorsUserToTerraform, true)(this._user.internalValue),
    };
  }
}
