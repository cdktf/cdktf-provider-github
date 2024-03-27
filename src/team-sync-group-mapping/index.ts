// https://registry.terraform.io/providers/integrations/github/6.2.1/docs/resources/team_sync_group_mapping
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface TeamSyncGroupMappingConfig extends cdktf.TerraformMetaArguments {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/integrations/github/6.2.1/docs/resources/team_sync_group_mapping#id TeamSyncGroupMapping#id}
  *
  * Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
  * If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.
  */
  readonly id?: string;
  /**
  * Slug of the team.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/integrations/github/6.2.1/docs/resources/team_sync_group_mapping#team_slug TeamSyncGroupMapping#team_slug}
  */
  readonly teamSlug: string;
  /**
  * group block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/integrations/github/6.2.1/docs/resources/team_sync_group_mapping#group TeamSyncGroupMapping#group}
  */
  readonly group?: TeamSyncGroupMappingGroup[] | cdktf.IResolvable;
}
export interface TeamSyncGroupMappingGroup {
  /**
  * The description of the IdP group.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/integrations/github/6.2.1/docs/resources/team_sync_group_mapping#group_description TeamSyncGroupMapping#group_description}
  */
  readonly groupDescription: string;
  /**
  * The ID of the IdP group.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/integrations/github/6.2.1/docs/resources/team_sync_group_mapping#group_id TeamSyncGroupMapping#group_id}
  */
  readonly groupId: string;
  /**
  * The name of the IdP group.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/integrations/github/6.2.1/docs/resources/team_sync_group_mapping#group_name TeamSyncGroupMapping#group_name}
  */
  readonly groupName: string;
}

export function teamSyncGroupMappingGroupToTerraform(struct?: TeamSyncGroupMappingGroup | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    group_description: cdktf.stringToTerraform(struct!.groupDescription),
    group_id: cdktf.stringToTerraform(struct!.groupId),
    group_name: cdktf.stringToTerraform(struct!.groupName),
  }
}


export function teamSyncGroupMappingGroupToHclTerraform(struct?: TeamSyncGroupMappingGroup | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    group_description: {
      value: cdktf.stringToHclTerraform(struct!.groupDescription),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    group_id: {
      value: cdktf.stringToHclTerraform(struct!.groupId),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    group_name: {
      value: cdktf.stringToHclTerraform(struct!.groupName),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class TeamSyncGroupMappingGroupOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): TeamSyncGroupMappingGroup | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._groupDescription !== undefined) {
      hasAnyValues = true;
      internalValueResult.groupDescription = this._groupDescription;
    }
    if (this._groupId !== undefined) {
      hasAnyValues = true;
      internalValueResult.groupId = this._groupId;
    }
    if (this._groupName !== undefined) {
      hasAnyValues = true;
      internalValueResult.groupName = this._groupName;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: TeamSyncGroupMappingGroup | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._groupDescription = undefined;
      this._groupId = undefined;
      this._groupName = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._groupDescription = value.groupDescription;
      this._groupId = value.groupId;
      this._groupName = value.groupName;
    }
  }

  // group_description - computed: false, optional: false, required: true
  private _groupDescription?: string; 
  public get groupDescription() {
    return this.getStringAttribute('group_description');
  }
  public set groupDescription(value: string) {
    this._groupDescription = value;
  }
  // Temporarily expose input value. Use with caution.
  public get groupDescriptionInput() {
    return this._groupDescription;
  }

  // group_id - computed: false, optional: false, required: true
  private _groupId?: string; 
  public get groupId() {
    return this.getStringAttribute('group_id');
  }
  public set groupId(value: string) {
    this._groupId = value;
  }
  // Temporarily expose input value. Use with caution.
  public get groupIdInput() {
    return this._groupId;
  }

  // group_name - computed: false, optional: false, required: true
  private _groupName?: string; 
  public get groupName() {
    return this.getStringAttribute('group_name');
  }
  public set groupName(value: string) {
    this._groupName = value;
  }
  // Temporarily expose input value. Use with caution.
  public get groupNameInput() {
    return this._groupName;
  }
}

export class TeamSyncGroupMappingGroupList extends cdktf.ComplexList {
  public internalValue? : TeamSyncGroupMappingGroup[] | cdktf.IResolvable

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
  public get(index: number): TeamSyncGroupMappingGroupOutputReference {
    return new TeamSyncGroupMappingGroupOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}

/**
* Represents a {@link https://registry.terraform.io/providers/integrations/github/6.2.1/docs/resources/team_sync_group_mapping github_team_sync_group_mapping}
*/
export class TeamSyncGroupMapping extends cdktf.TerraformResource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "github_team_sync_group_mapping";

  // ==============
  // STATIC Methods
  // ==============
  /**
  * Generates CDKTF code for importing a TeamSyncGroupMapping resource upon running "cdktf plan <stack-name>"
  * @param scope The scope in which to define this construct
  * @param importToId The construct id used in the generated config for the TeamSyncGroupMapping to import
  * @param importFromId The id of the existing TeamSyncGroupMapping that should be imported. Refer to the {@link https://registry.terraform.io/providers/integrations/github/6.2.1/docs/resources/team_sync_group_mapping#import import section} in the documentation of this resource for the id to use
  * @param provider? Optional instance of the provider where the TeamSyncGroupMapping to import is found
  */
  public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktf.TerraformProvider) {
        return new cdktf.ImportableResource(scope, importToId, { terraformResourceType: "github_team_sync_group_mapping", importId: importFromId, provider });
      }

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://registry.terraform.io/providers/integrations/github/6.2.1/docs/resources/team_sync_group_mapping github_team_sync_group_mapping} Resource
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options TeamSyncGroupMappingConfig
  */
  public constructor(scope: Construct, id: string, config: TeamSyncGroupMappingConfig) {
    super(scope, id, {
      terraformResourceType: 'github_team_sync_group_mapping',
      terraformGeneratorMetadata: {
        providerName: 'github',
        providerVersion: '6.2.1',
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
    this._teamSlug = config.teamSlug;
    this._group.internalValue = config.group;
  }

  // ==========
  // ATTRIBUTES
  // ==========

  // etag - computed: true, optional: false, required: false
  public get etag() {
    return this.getStringAttribute('etag');
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

  // team_slug - computed: false, optional: false, required: true
  private _teamSlug?: string; 
  public get teamSlug() {
    return this.getStringAttribute('team_slug');
  }
  public set teamSlug(value: string) {
    this._teamSlug = value;
  }
  // Temporarily expose input value. Use with caution.
  public get teamSlugInput() {
    return this._teamSlug;
  }

  // group - computed: false, optional: true, required: false
  private _group = new TeamSyncGroupMappingGroupList(this, "group", true);
  public get group() {
    return this._group;
  }
  public putGroup(value: TeamSyncGroupMappingGroup[] | cdktf.IResolvable) {
    this._group.internalValue = value;
  }
  public resetGroup() {
    this._group.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get groupInput() {
    return this._group.internalValue;
  }

  // =========
  // SYNTHESIS
  // =========

  protected synthesizeAttributes(): { [name: string]: any } {
    return {
      id: cdktf.stringToTerraform(this._id),
      team_slug: cdktf.stringToTerraform(this._teamSlug),
      group: cdktf.listMapper(teamSyncGroupMappingGroupToTerraform, true)(this._group.internalValue),
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
      team_slug: {
        value: cdktf.stringToHclTerraform(this._teamSlug),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      group: {
        value: cdktf.listMapperHcl(teamSyncGroupMappingGroupToHclTerraform, true)(this._group.internalValue),
        isBlock: true,
        type: "set",
        storageClassType: "TeamSyncGroupMappingGroupList",
      },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined ))
  }
}
