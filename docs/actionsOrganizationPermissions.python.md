# `actionsOrganizationPermissions` Submodule <a name="`actionsOrganizationPermissions` Submodule" id="@cdktf/provider-github.actionsOrganizationPermissions"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### ActionsOrganizationPermissions <a name="ActionsOrganizationPermissions" id="@cdktf/provider-github.actionsOrganizationPermissions.ActionsOrganizationPermissions"></a>

Represents a {@link https://registry.terraform.io/providers/integrations/github/6.8.2/docs/resources/actions_organization_permissions github_actions_organization_permissions}.

#### Initializers <a name="Initializers" id="@cdktf/provider-github.actionsOrganizationPermissions.ActionsOrganizationPermissions.Initializer"></a>

```python
from cdktf_cdktf_provider_github import actions_organization_permissions

actionsOrganizationPermissions.ActionsOrganizationPermissions(
  scope: Construct,
  id: str,
  connection: SSHProvisionerConnection | WinrmProvisionerConnection = None,
  count: typing.Union[int, float] | TerraformCount = None,
  depends_on: typing.List[ITerraformDependable] = None,
  for_each: ITerraformIterator = None,
  lifecycle: TerraformResourceLifecycle = None,
  provider: TerraformProvider = None,
  provisioners: typing.List[FileProvisioner | LocalExecProvisioner | RemoteExecProvisioner] = None,
  enabled_repositories: str,
  allowed_actions: str = None,
  allowed_actions_config: ActionsOrganizationPermissionsAllowedActionsConfig = None,
  enabled_repositories_config: ActionsOrganizationPermissionsEnabledRepositoriesConfig = None,
  id: str = None
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-github.actionsOrganizationPermissions.ActionsOrganizationPermissions.Initializer.parameter.scope">scope</a></code> | <code>constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktf/provider-github.actionsOrganizationPermissions.ActionsOrganizationPermissions.Initializer.parameter.id">id</a></code> | <code>str</code> | The scoped construct ID. |
| <code><a href="#@cdktf/provider-github.actionsOrganizationPermissions.ActionsOrganizationPermissions.Initializer.parameter.connection">connection</a></code> | <code>cdktf.SSHProvisionerConnection \| cdktf.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktf/provider-github.actionsOrganizationPermissions.ActionsOrganizationPermissions.Initializer.parameter.count">count</a></code> | <code>typing.Union[int, float] \| cdktf.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktf/provider-github.actionsOrganizationPermissions.ActionsOrganizationPermissions.Initializer.parameter.dependsOn">depends_on</a></code> | <code>typing.List[cdktf.ITerraformDependable]</code> | *No description.* |
| <code><a href="#@cdktf/provider-github.actionsOrganizationPermissions.ActionsOrganizationPermissions.Initializer.parameter.forEach">for_each</a></code> | <code>cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-github.actionsOrganizationPermissions.ActionsOrganizationPermissions.Initializer.parameter.lifecycle">lifecycle</a></code> | <code>cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-github.actionsOrganizationPermissions.ActionsOrganizationPermissions.Initializer.parameter.provider">provider</a></code> | <code>cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-github.actionsOrganizationPermissions.ActionsOrganizationPermissions.Initializer.parameter.provisioners">provisioners</a></code> | <code>typing.List[cdktf.FileProvisioner \| cdktf.LocalExecProvisioner \| cdktf.RemoteExecProvisioner]</code> | *No description.* |
| <code><a href="#@cdktf/provider-github.actionsOrganizationPermissions.ActionsOrganizationPermissions.Initializer.parameter.enabledRepositories">enabled_repositories</a></code> | <code>str</code> | The policy that controls the repositories in the organization that are allowed to run GitHub Actions. |
| <code><a href="#@cdktf/provider-github.actionsOrganizationPermissions.ActionsOrganizationPermissions.Initializer.parameter.allowedActions">allowed_actions</a></code> | <code>str</code> | The permissions policy that controls the actions that are allowed to run. |
| <code><a href="#@cdktf/provider-github.actionsOrganizationPermissions.ActionsOrganizationPermissions.Initializer.parameter.allowedActionsConfig">allowed_actions_config</a></code> | <code><a href="#@cdktf/provider-github.actionsOrganizationPermissions.ActionsOrganizationPermissionsAllowedActionsConfig">ActionsOrganizationPermissionsAllowedActionsConfig</a></code> | allowed_actions_config block. |
| <code><a href="#@cdktf/provider-github.actionsOrganizationPermissions.ActionsOrganizationPermissions.Initializer.parameter.enabledRepositoriesConfig">enabled_repositories_config</a></code> | <code><a href="#@cdktf/provider-github.actionsOrganizationPermissions.ActionsOrganizationPermissionsEnabledRepositoriesConfig">ActionsOrganizationPermissionsEnabledRepositoriesConfig</a></code> | enabled_repositories_config block. |
| <code><a href="#@cdktf/provider-github.actionsOrganizationPermissions.ActionsOrganizationPermissions.Initializer.parameter.id">id</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/integrations/github/6.8.2/docs/resources/actions_organization_permissions#id ActionsOrganizationPermissions#id}. |

---

##### `scope`<sup>Required</sup> <a name="scope" id="@cdktf/provider-github.actionsOrganizationPermissions.ActionsOrganizationPermissions.Initializer.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-github.actionsOrganizationPermissions.ActionsOrganizationPermissions.Initializer.parameter.id"></a>

- *Type:* str

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktf/provider-github.actionsOrganizationPermissions.ActionsOrganizationPermissions.Initializer.parameter.connection"></a>

- *Type:* cdktf.SSHProvisionerConnection | cdktf.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-github.actionsOrganizationPermissions.ActionsOrganizationPermissions.Initializer.parameter.count"></a>

- *Type:* typing.Union[int, float] | cdktf.TerraformCount

---

##### `depends_on`<sup>Optional</sup> <a name="depends_on" id="@cdktf/provider-github.actionsOrganizationPermissions.ActionsOrganizationPermissions.Initializer.parameter.dependsOn"></a>

- *Type:* typing.List[cdktf.ITerraformDependable]

---

##### `for_each`<sup>Optional</sup> <a name="for_each" id="@cdktf/provider-github.actionsOrganizationPermissions.ActionsOrganizationPermissions.Initializer.parameter.forEach"></a>

- *Type:* cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-github.actionsOrganizationPermissions.ActionsOrganizationPermissions.Initializer.parameter.lifecycle"></a>

- *Type:* cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-github.actionsOrganizationPermissions.ActionsOrganizationPermissions.Initializer.parameter.provider"></a>

- *Type:* cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktf/provider-github.actionsOrganizationPermissions.ActionsOrganizationPermissions.Initializer.parameter.provisioners"></a>

- *Type:* typing.List[cdktf.FileProvisioner | cdktf.LocalExecProvisioner | cdktf.RemoteExecProvisioner]

---

##### `enabled_repositories`<sup>Required</sup> <a name="enabled_repositories" id="@cdktf/provider-github.actionsOrganizationPermissions.ActionsOrganizationPermissions.Initializer.parameter.enabledRepositories"></a>

- *Type:* str

The policy that controls the repositories in the organization that are allowed to run GitHub Actions.

Can be one of: 'all', 'none', or 'selected'.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/integrations/github/6.8.2/docs/resources/actions_organization_permissions#enabled_repositories ActionsOrganizationPermissions#enabled_repositories}

---

##### `allowed_actions`<sup>Optional</sup> <a name="allowed_actions" id="@cdktf/provider-github.actionsOrganizationPermissions.ActionsOrganizationPermissions.Initializer.parameter.allowedActions"></a>

- *Type:* str

The permissions policy that controls the actions that are allowed to run.

Can be one of: 'all', 'local_only', or 'selected'.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/integrations/github/6.8.2/docs/resources/actions_organization_permissions#allowed_actions ActionsOrganizationPermissions#allowed_actions}

---

##### `allowed_actions_config`<sup>Optional</sup> <a name="allowed_actions_config" id="@cdktf/provider-github.actionsOrganizationPermissions.ActionsOrganizationPermissions.Initializer.parameter.allowedActionsConfig"></a>

- *Type:* <a href="#@cdktf/provider-github.actionsOrganizationPermissions.ActionsOrganizationPermissionsAllowedActionsConfig">ActionsOrganizationPermissionsAllowedActionsConfig</a>

allowed_actions_config block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/integrations/github/6.8.2/docs/resources/actions_organization_permissions#allowed_actions_config ActionsOrganizationPermissions#allowed_actions_config}

---

##### `enabled_repositories_config`<sup>Optional</sup> <a name="enabled_repositories_config" id="@cdktf/provider-github.actionsOrganizationPermissions.ActionsOrganizationPermissions.Initializer.parameter.enabledRepositoriesConfig"></a>

- *Type:* <a href="#@cdktf/provider-github.actionsOrganizationPermissions.ActionsOrganizationPermissionsEnabledRepositoriesConfig">ActionsOrganizationPermissionsEnabledRepositoriesConfig</a>

enabled_repositories_config block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/integrations/github/6.8.2/docs/resources/actions_organization_permissions#enabled_repositories_config ActionsOrganizationPermissions#enabled_repositories_config}

---

##### `id`<sup>Optional</sup> <a name="id" id="@cdktf/provider-github.actionsOrganizationPermissions.ActionsOrganizationPermissions.Initializer.parameter.id"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/integrations/github/6.8.2/docs/resources/actions_organization_permissions#id ActionsOrganizationPermissions#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-github.actionsOrganizationPermissions.ActionsOrganizationPermissions.toString">to_string</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktf/provider-github.actionsOrganizationPermissions.ActionsOrganizationPermissions.addOverride">add_override</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-github.actionsOrganizationPermissions.ActionsOrganizationPermissions.overrideLogicalId">override_logical_id</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktf/provider-github.actionsOrganizationPermissions.ActionsOrganizationPermissions.resetOverrideLogicalId">reset_override_logical_id</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktf/provider-github.actionsOrganizationPermissions.ActionsOrganizationPermissions.toHclTerraform">to_hcl_terraform</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-github.actionsOrganizationPermissions.ActionsOrganizationPermissions.toMetadata">to_metadata</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-github.actionsOrganizationPermissions.ActionsOrganizationPermissions.toTerraform">to_terraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktf/provider-github.actionsOrganizationPermissions.ActionsOrganizationPermissions.addMoveTarget">add_move_target</a></code> | Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move. |
| <code><a href="#@cdktf/provider-github.actionsOrganizationPermissions.ActionsOrganizationPermissions.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-github.actionsOrganizationPermissions.ActionsOrganizationPermissions.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-github.actionsOrganizationPermissions.ActionsOrganizationPermissions.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-github.actionsOrganizationPermissions.ActionsOrganizationPermissions.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-github.actionsOrganizationPermissions.ActionsOrganizationPermissions.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-github.actionsOrganizationPermissions.ActionsOrganizationPermissions.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-github.actionsOrganizationPermissions.ActionsOrganizationPermissions.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-github.actionsOrganizationPermissions.ActionsOrganizationPermissions.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-github.actionsOrganizationPermissions.ActionsOrganizationPermissions.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-github.actionsOrganizationPermissions.ActionsOrganizationPermissions.hasResourceMove">has_resource_move</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-github.actionsOrganizationPermissions.ActionsOrganizationPermissions.importFrom">import_from</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-github.actionsOrganizationPermissions.ActionsOrganizationPermissions.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-github.actionsOrganizationPermissions.ActionsOrganizationPermissions.moveFromId">move_from_id</a></code> | Move the resource corresponding to "id" to this resource. |
| <code><a href="#@cdktf/provider-github.actionsOrganizationPermissions.ActionsOrganizationPermissions.moveTo">move_to</a></code> | Moves this resource to the target resource given by moveTarget. |
| <code><a href="#@cdktf/provider-github.actionsOrganizationPermissions.ActionsOrganizationPermissions.moveToId">move_to_id</a></code> | Moves this resource to the resource corresponding to "id". |
| <code><a href="#@cdktf/provider-github.actionsOrganizationPermissions.ActionsOrganizationPermissions.putAllowedActionsConfig">put_allowed_actions_config</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-github.actionsOrganizationPermissions.ActionsOrganizationPermissions.putEnabledRepositoriesConfig">put_enabled_repositories_config</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-github.actionsOrganizationPermissions.ActionsOrganizationPermissions.resetAllowedActions">reset_allowed_actions</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-github.actionsOrganizationPermissions.ActionsOrganizationPermissions.resetAllowedActionsConfig">reset_allowed_actions_config</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-github.actionsOrganizationPermissions.ActionsOrganizationPermissions.resetEnabledRepositoriesConfig">reset_enabled_repositories_config</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-github.actionsOrganizationPermissions.ActionsOrganizationPermissions.resetId">reset_id</a></code> | *No description.* |

---

##### `to_string` <a name="to_string" id="@cdktf/provider-github.actionsOrganizationPermissions.ActionsOrganizationPermissions.toString"></a>

```python
def to_string() -> str
```

Returns a string representation of this construct.

##### `add_override` <a name="add_override" id="@cdktf/provider-github.actionsOrganizationPermissions.ActionsOrganizationPermissions.addOverride"></a>

```python
def add_override(
  path: str,
  value: typing.Any
) -> None
```

###### `path`<sup>Required</sup> <a name="path" id="@cdktf/provider-github.actionsOrganizationPermissions.ActionsOrganizationPermissions.addOverride.parameter.path"></a>

- *Type:* str

---

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-github.actionsOrganizationPermissions.ActionsOrganizationPermissions.addOverride.parameter.value"></a>

- *Type:* typing.Any

---

##### `override_logical_id` <a name="override_logical_id" id="@cdktf/provider-github.actionsOrganizationPermissions.ActionsOrganizationPermissions.overrideLogicalId"></a>

```python
def override_logical_id(
  new_logical_id: str
) -> None
```

Overrides the auto-generated logical ID with a specific ID.

###### `new_logical_id`<sup>Required</sup> <a name="new_logical_id" id="@cdktf/provider-github.actionsOrganizationPermissions.ActionsOrganizationPermissions.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* str

The new logical ID to use for this stack element.

---

##### `reset_override_logical_id` <a name="reset_override_logical_id" id="@cdktf/provider-github.actionsOrganizationPermissions.ActionsOrganizationPermissions.resetOverrideLogicalId"></a>

```python
def reset_override_logical_id() -> None
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `to_hcl_terraform` <a name="to_hcl_terraform" id="@cdktf/provider-github.actionsOrganizationPermissions.ActionsOrganizationPermissions.toHclTerraform"></a>

```python
def to_hcl_terraform() -> typing.Any
```

##### `to_metadata` <a name="to_metadata" id="@cdktf/provider-github.actionsOrganizationPermissions.ActionsOrganizationPermissions.toMetadata"></a>

```python
def to_metadata() -> typing.Any
```

##### `to_terraform` <a name="to_terraform" id="@cdktf/provider-github.actionsOrganizationPermissions.ActionsOrganizationPermissions.toTerraform"></a>

```python
def to_terraform() -> typing.Any
```

Adds this resource to the terraform JSON output.

##### `add_move_target` <a name="add_move_target" id="@cdktf/provider-github.actionsOrganizationPermissions.ActionsOrganizationPermissions.addMoveTarget"></a>

```python
def add_move_target(
  move_target: str
) -> None
```

Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move.

###### `move_target`<sup>Required</sup> <a name="move_target" id="@cdktf/provider-github.actionsOrganizationPermissions.ActionsOrganizationPermissions.addMoveTarget.parameter.moveTarget"></a>

- *Type:* str

The string move target that will correspond to this resource.

---

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktf/provider-github.actionsOrganizationPermissions.ActionsOrganizationPermissions.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-github.actionsOrganizationPermissions.ActionsOrganizationPermissions.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktf/provider-github.actionsOrganizationPermissions.ActionsOrganizationPermissions.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-github.actionsOrganizationPermissions.ActionsOrganizationPermissions.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktf/provider-github.actionsOrganizationPermissions.ActionsOrganizationPermissions.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-github.actionsOrganizationPermissions.ActionsOrganizationPermissions.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktf/provider-github.actionsOrganizationPermissions.ActionsOrganizationPermissions.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-github.actionsOrganizationPermissions.ActionsOrganizationPermissions.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktf/provider-github.actionsOrganizationPermissions.ActionsOrganizationPermissions.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-github.actionsOrganizationPermissions.ActionsOrganizationPermissions.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktf/provider-github.actionsOrganizationPermissions.ActionsOrganizationPermissions.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-github.actionsOrganizationPermissions.ActionsOrganizationPermissions.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktf/provider-github.actionsOrganizationPermissions.ActionsOrganizationPermissions.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-github.actionsOrganizationPermissions.ActionsOrganizationPermissions.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktf/provider-github.actionsOrganizationPermissions.ActionsOrganizationPermissions.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-github.actionsOrganizationPermissions.ActionsOrganizationPermissions.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktf/provider-github.actionsOrganizationPermissions.ActionsOrganizationPermissions.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-github.actionsOrganizationPermissions.ActionsOrganizationPermissions.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `has_resource_move` <a name="has_resource_move" id="@cdktf/provider-github.actionsOrganizationPermissions.ActionsOrganizationPermissions.hasResourceMove"></a>

```python
def has_resource_move() -> TerraformResourceMoveByTarget | TerraformResourceMoveById
```

##### `import_from` <a name="import_from" id="@cdktf/provider-github.actionsOrganizationPermissions.ActionsOrganizationPermissions.importFrom"></a>

```python
def import_from(
  id: str,
  provider: TerraformProvider = None
) -> None
```

###### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-github.actionsOrganizationPermissions.ActionsOrganizationPermissions.importFrom.parameter.id"></a>

- *Type:* str

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-github.actionsOrganizationPermissions.ActionsOrganizationPermissions.importFrom.parameter.provider"></a>

- *Type:* cdktf.TerraformProvider

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktf/provider-github.actionsOrganizationPermissions.ActionsOrganizationPermissions.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-github.actionsOrganizationPermissions.ActionsOrganizationPermissions.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `move_from_id` <a name="move_from_id" id="@cdktf/provider-github.actionsOrganizationPermissions.ActionsOrganizationPermissions.moveFromId"></a>

```python
def move_from_id(
  id: str
) -> None
```

Move the resource corresponding to "id" to this resource.

Note that the resource being moved from must be marked as moved using it's instance function.

###### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-github.actionsOrganizationPermissions.ActionsOrganizationPermissions.moveFromId.parameter.id"></a>

- *Type:* str

Full id of resource being moved from, e.g. "aws_s3_bucket.example".

---

##### `move_to` <a name="move_to" id="@cdktf/provider-github.actionsOrganizationPermissions.ActionsOrganizationPermissions.moveTo"></a>

```python
def move_to(
  move_target: str,
  index: str | typing.Union[int, float] = None
) -> None
```

Moves this resource to the target resource given by moveTarget.

###### `move_target`<sup>Required</sup> <a name="move_target" id="@cdktf/provider-github.actionsOrganizationPermissions.ActionsOrganizationPermissions.moveTo.parameter.moveTarget"></a>

- *Type:* str

The previously set user defined string set by .addMoveTarget() corresponding to the resource to move to.

---

###### `index`<sup>Optional</sup> <a name="index" id="@cdktf/provider-github.actionsOrganizationPermissions.ActionsOrganizationPermissions.moveTo.parameter.index"></a>

- *Type:* str | typing.Union[int, float]

Optional The index corresponding to the key the resource is to appear in the foreach of a resource to move to.

---

##### `move_to_id` <a name="move_to_id" id="@cdktf/provider-github.actionsOrganizationPermissions.ActionsOrganizationPermissions.moveToId"></a>

```python
def move_to_id(
  id: str
) -> None
```

Moves this resource to the resource corresponding to "id".

###### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-github.actionsOrganizationPermissions.ActionsOrganizationPermissions.moveToId.parameter.id"></a>

- *Type:* str

Full id of resource to move to, e.g. "aws_s3_bucket.example".

---

##### `put_allowed_actions_config` <a name="put_allowed_actions_config" id="@cdktf/provider-github.actionsOrganizationPermissions.ActionsOrganizationPermissions.putAllowedActionsConfig"></a>

```python
def put_allowed_actions_config(
  github_owned_allowed: bool | IResolvable,
  patterns_allowed: typing.List[str] = None,
  verified_allowed: bool | IResolvable = None
) -> None
```

###### `github_owned_allowed`<sup>Required</sup> <a name="github_owned_allowed" id="@cdktf/provider-github.actionsOrganizationPermissions.ActionsOrganizationPermissions.putAllowedActionsConfig.parameter.githubOwnedAllowed"></a>

- *Type:* bool | cdktf.IResolvable

Whether GitHub-owned actions are allowed in the organization.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/integrations/github/6.8.2/docs/resources/actions_organization_permissions#github_owned_allowed ActionsOrganizationPermissions#github_owned_allowed}

---

###### `patterns_allowed`<sup>Optional</sup> <a name="patterns_allowed" id="@cdktf/provider-github.actionsOrganizationPermissions.ActionsOrganizationPermissions.putAllowedActionsConfig.parameter.patternsAllowed"></a>

- *Type:* typing.List[str]

Specifies a list of string-matching patterns to allow specific action(s).

Wildcards, tags, and SHAs are allowed. For example, 'monalisa/octocat@', 'monalisa/octocat@v2', 'monalisa/'.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/integrations/github/6.8.2/docs/resources/actions_organization_permissions#patterns_allowed ActionsOrganizationPermissions#patterns_allowed}

---

###### `verified_allowed`<sup>Optional</sup> <a name="verified_allowed" id="@cdktf/provider-github.actionsOrganizationPermissions.ActionsOrganizationPermissions.putAllowedActionsConfig.parameter.verifiedAllowed"></a>

- *Type:* bool | cdktf.IResolvable

Whether actions in GitHub Marketplace from verified creators are allowed.

Set to 'true' to allow all GitHub Marketplace actions by verified creators.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/integrations/github/6.8.2/docs/resources/actions_organization_permissions#verified_allowed ActionsOrganizationPermissions#verified_allowed}

---

##### `put_enabled_repositories_config` <a name="put_enabled_repositories_config" id="@cdktf/provider-github.actionsOrganizationPermissions.ActionsOrganizationPermissions.putEnabledRepositoriesConfig"></a>

```python
def put_enabled_repositories_config(
  repository_ids: typing.List[typing.Union[int, float]]
) -> None
```

###### `repository_ids`<sup>Required</sup> <a name="repository_ids" id="@cdktf/provider-github.actionsOrganizationPermissions.ActionsOrganizationPermissions.putEnabledRepositoriesConfig.parameter.repositoryIds"></a>

- *Type:* typing.List[typing.Union[int, float]]

List of repository IDs to enable for GitHub Actions.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/integrations/github/6.8.2/docs/resources/actions_organization_permissions#repository_ids ActionsOrganizationPermissions#repository_ids}

---

##### `reset_allowed_actions` <a name="reset_allowed_actions" id="@cdktf/provider-github.actionsOrganizationPermissions.ActionsOrganizationPermissions.resetAllowedActions"></a>

```python
def reset_allowed_actions() -> None
```

##### `reset_allowed_actions_config` <a name="reset_allowed_actions_config" id="@cdktf/provider-github.actionsOrganizationPermissions.ActionsOrganizationPermissions.resetAllowedActionsConfig"></a>

```python
def reset_allowed_actions_config() -> None
```

##### `reset_enabled_repositories_config` <a name="reset_enabled_repositories_config" id="@cdktf/provider-github.actionsOrganizationPermissions.ActionsOrganizationPermissions.resetEnabledRepositoriesConfig"></a>

```python
def reset_enabled_repositories_config() -> None
```

##### `reset_id` <a name="reset_id" id="@cdktf/provider-github.actionsOrganizationPermissions.ActionsOrganizationPermissions.resetId"></a>

```python
def reset_id() -> None
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-github.actionsOrganizationPermissions.ActionsOrganizationPermissions.isConstruct">is_construct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktf/provider-github.actionsOrganizationPermissions.ActionsOrganizationPermissions.isTerraformElement">is_terraform_element</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-github.actionsOrganizationPermissions.ActionsOrganizationPermissions.isTerraformResource">is_terraform_resource</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-github.actionsOrganizationPermissions.ActionsOrganizationPermissions.generateConfigForImport">generate_config_for_import</a></code> | Generates CDKTF code for importing a ActionsOrganizationPermissions resource upon running "cdktf plan <stack-name>". |

---

##### `is_construct` <a name="is_construct" id="@cdktf/provider-github.actionsOrganizationPermissions.ActionsOrganizationPermissions.isConstruct"></a>

```python
from cdktf_cdktf_provider_github import actions_organization_permissions

actionsOrganizationPermissions.ActionsOrganizationPermissions.is_construct(
  x: typing.Any
)
```

Checks if `x` is a construct.

Use this method instead of `instanceof` to properly detect `Construct`
instances, even when the construct library is symlinked.

Explanation: in JavaScript, multiple copies of the `constructs` library on
disk are seen as independent, completely different libraries. As a
consequence, the class `Construct` in each copy of the `constructs` library
is seen as a different class, and an instance of one class will not test as
`instanceof` the other class. `npm install` will not create installations
like this, but users may manually symlink construct libraries together or
use a monorepo tool: in those cases, multiple copies of the `constructs`
library can be accidentally installed, and `instanceof` will behave
unpredictably. It is safest to avoid using `instanceof`, and using
this type-testing method instead.

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-github.actionsOrganizationPermissions.ActionsOrganizationPermissions.isConstruct.parameter.x"></a>

- *Type:* typing.Any

Any object.

---

##### `is_terraform_element` <a name="is_terraform_element" id="@cdktf/provider-github.actionsOrganizationPermissions.ActionsOrganizationPermissions.isTerraformElement"></a>

```python
from cdktf_cdktf_provider_github import actions_organization_permissions

actionsOrganizationPermissions.ActionsOrganizationPermissions.is_terraform_element(
  x: typing.Any
)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-github.actionsOrganizationPermissions.ActionsOrganizationPermissions.isTerraformElement.parameter.x"></a>

- *Type:* typing.Any

---

##### `is_terraform_resource` <a name="is_terraform_resource" id="@cdktf/provider-github.actionsOrganizationPermissions.ActionsOrganizationPermissions.isTerraformResource"></a>

```python
from cdktf_cdktf_provider_github import actions_organization_permissions

actionsOrganizationPermissions.ActionsOrganizationPermissions.is_terraform_resource(
  x: typing.Any
)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-github.actionsOrganizationPermissions.ActionsOrganizationPermissions.isTerraformResource.parameter.x"></a>

- *Type:* typing.Any

---

##### `generate_config_for_import` <a name="generate_config_for_import" id="@cdktf/provider-github.actionsOrganizationPermissions.ActionsOrganizationPermissions.generateConfigForImport"></a>

```python
from cdktf_cdktf_provider_github import actions_organization_permissions

actionsOrganizationPermissions.ActionsOrganizationPermissions.generate_config_for_import(
  scope: Construct,
  import_to_id: str,
  import_from_id: str,
  provider: TerraformProvider = None
)
```

Generates CDKTF code for importing a ActionsOrganizationPermissions resource upon running "cdktf plan <stack-name>".

###### `scope`<sup>Required</sup> <a name="scope" id="@cdktf/provider-github.actionsOrganizationPermissions.ActionsOrganizationPermissions.generateConfigForImport.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

###### `import_to_id`<sup>Required</sup> <a name="import_to_id" id="@cdktf/provider-github.actionsOrganizationPermissions.ActionsOrganizationPermissions.generateConfigForImport.parameter.importToId"></a>

- *Type:* str

The construct id used in the generated config for the ActionsOrganizationPermissions to import.

---

###### `import_from_id`<sup>Required</sup> <a name="import_from_id" id="@cdktf/provider-github.actionsOrganizationPermissions.ActionsOrganizationPermissions.generateConfigForImport.parameter.importFromId"></a>

- *Type:* str

The id of the existing ActionsOrganizationPermissions that should be imported.

Refer to the {@link https://registry.terraform.io/providers/integrations/github/6.8.2/docs/resources/actions_organization_permissions#import import section} in the documentation of this resource for the id to use

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-github.actionsOrganizationPermissions.ActionsOrganizationPermissions.generateConfigForImport.parameter.provider"></a>

- *Type:* cdktf.TerraformProvider

? Optional instance of the provider where the ActionsOrganizationPermissions to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-github.actionsOrganizationPermissions.ActionsOrganizationPermissions.property.node">node</a></code> | <code>constructs.Node</code> | The tree node. |
| <code><a href="#@cdktf/provider-github.actionsOrganizationPermissions.ActionsOrganizationPermissions.property.cdktfStack">cdktf_stack</a></code> | <code>cdktf.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktf/provider-github.actionsOrganizationPermissions.ActionsOrganizationPermissions.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-github.actionsOrganizationPermissions.ActionsOrganizationPermissions.property.friendlyUniqueId">friendly_unique_id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-github.actionsOrganizationPermissions.ActionsOrganizationPermissions.property.terraformMetaArguments">terraform_meta_arguments</a></code> | <code>typing.Mapping[typing.Any]</code> | *No description.* |
| <code><a href="#@cdktf/provider-github.actionsOrganizationPermissions.ActionsOrganizationPermissions.property.terraformResourceType">terraform_resource_type</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-github.actionsOrganizationPermissions.ActionsOrganizationPermissions.property.terraformGeneratorMetadata">terraform_generator_metadata</a></code> | <code>cdktf.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktf/provider-github.actionsOrganizationPermissions.ActionsOrganizationPermissions.property.connection">connection</a></code> | <code>cdktf.SSHProvisionerConnection \| cdktf.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktf/provider-github.actionsOrganizationPermissions.ActionsOrganizationPermissions.property.count">count</a></code> | <code>typing.Union[int, float] \| cdktf.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktf/provider-github.actionsOrganizationPermissions.ActionsOrganizationPermissions.property.dependsOn">depends_on</a></code> | <code>typing.List[str]</code> | *No description.* |
| <code><a href="#@cdktf/provider-github.actionsOrganizationPermissions.ActionsOrganizationPermissions.property.forEach">for_each</a></code> | <code>cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-github.actionsOrganizationPermissions.ActionsOrganizationPermissions.property.lifecycle">lifecycle</a></code> | <code>cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-github.actionsOrganizationPermissions.ActionsOrganizationPermissions.property.provider">provider</a></code> | <code>cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-github.actionsOrganizationPermissions.ActionsOrganizationPermissions.property.provisioners">provisioners</a></code> | <code>typing.List[cdktf.FileProvisioner \| cdktf.LocalExecProvisioner \| cdktf.RemoteExecProvisioner]</code> | *No description.* |
| <code><a href="#@cdktf/provider-github.actionsOrganizationPermissions.ActionsOrganizationPermissions.property.allowedActionsConfig">allowed_actions_config</a></code> | <code><a href="#@cdktf/provider-github.actionsOrganizationPermissions.ActionsOrganizationPermissionsAllowedActionsConfigOutputReference">ActionsOrganizationPermissionsAllowedActionsConfigOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-github.actionsOrganizationPermissions.ActionsOrganizationPermissions.property.enabledRepositoriesConfig">enabled_repositories_config</a></code> | <code><a href="#@cdktf/provider-github.actionsOrganizationPermissions.ActionsOrganizationPermissionsEnabledRepositoriesConfigOutputReference">ActionsOrganizationPermissionsEnabledRepositoriesConfigOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-github.actionsOrganizationPermissions.ActionsOrganizationPermissions.property.allowedActionsConfigInput">allowed_actions_config_input</a></code> | <code><a href="#@cdktf/provider-github.actionsOrganizationPermissions.ActionsOrganizationPermissionsAllowedActionsConfig">ActionsOrganizationPermissionsAllowedActionsConfig</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-github.actionsOrganizationPermissions.ActionsOrganizationPermissions.property.allowedActionsInput">allowed_actions_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-github.actionsOrganizationPermissions.ActionsOrganizationPermissions.property.enabledRepositoriesConfigInput">enabled_repositories_config_input</a></code> | <code><a href="#@cdktf/provider-github.actionsOrganizationPermissions.ActionsOrganizationPermissionsEnabledRepositoriesConfig">ActionsOrganizationPermissionsEnabledRepositoriesConfig</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-github.actionsOrganizationPermissions.ActionsOrganizationPermissions.property.enabledRepositoriesInput">enabled_repositories_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-github.actionsOrganizationPermissions.ActionsOrganizationPermissions.property.idInput">id_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-github.actionsOrganizationPermissions.ActionsOrganizationPermissions.property.allowedActions">allowed_actions</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-github.actionsOrganizationPermissions.ActionsOrganizationPermissions.property.enabledRepositories">enabled_repositories</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-github.actionsOrganizationPermissions.ActionsOrganizationPermissions.property.id">id</a></code> | <code>str</code> | *No description.* |

---

##### `node`<sup>Required</sup> <a name="node" id="@cdktf/provider-github.actionsOrganizationPermissions.ActionsOrganizationPermissions.property.node"></a>

```python
node: Node
```

- *Type:* constructs.Node

The tree node.

---

##### `cdktf_stack`<sup>Required</sup> <a name="cdktf_stack" id="@cdktf/provider-github.actionsOrganizationPermissions.ActionsOrganizationPermissions.property.cdktfStack"></a>

```python
cdktf_stack: TerraformStack
```

- *Type:* cdktf.TerraformStack

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-github.actionsOrganizationPermissions.ActionsOrganizationPermissions.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `friendly_unique_id`<sup>Required</sup> <a name="friendly_unique_id" id="@cdktf/provider-github.actionsOrganizationPermissions.ActionsOrganizationPermissions.property.friendlyUniqueId"></a>

```python
friendly_unique_id: str
```

- *Type:* str

---

##### `terraform_meta_arguments`<sup>Required</sup> <a name="terraform_meta_arguments" id="@cdktf/provider-github.actionsOrganizationPermissions.ActionsOrganizationPermissions.property.terraformMetaArguments"></a>

```python
terraform_meta_arguments: typing.Mapping[typing.Any]
```

- *Type:* typing.Mapping[typing.Any]

---

##### `terraform_resource_type`<sup>Required</sup> <a name="terraform_resource_type" id="@cdktf/provider-github.actionsOrganizationPermissions.ActionsOrganizationPermissions.property.terraformResourceType"></a>

```python
terraform_resource_type: str
```

- *Type:* str

---

##### `terraform_generator_metadata`<sup>Optional</sup> <a name="terraform_generator_metadata" id="@cdktf/provider-github.actionsOrganizationPermissions.ActionsOrganizationPermissions.property.terraformGeneratorMetadata"></a>

```python
terraform_generator_metadata: TerraformProviderGeneratorMetadata
```

- *Type:* cdktf.TerraformProviderGeneratorMetadata

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktf/provider-github.actionsOrganizationPermissions.ActionsOrganizationPermissions.property.connection"></a>

```python
connection: SSHProvisionerConnection | WinrmProvisionerConnection
```

- *Type:* cdktf.SSHProvisionerConnection | cdktf.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-github.actionsOrganizationPermissions.ActionsOrganizationPermissions.property.count"></a>

```python
count: typing.Union[int, float] | TerraformCount
```

- *Type:* typing.Union[int, float] | cdktf.TerraformCount

---

##### `depends_on`<sup>Optional</sup> <a name="depends_on" id="@cdktf/provider-github.actionsOrganizationPermissions.ActionsOrganizationPermissions.property.dependsOn"></a>

```python
depends_on: typing.List[str]
```

- *Type:* typing.List[str]

---

##### `for_each`<sup>Optional</sup> <a name="for_each" id="@cdktf/provider-github.actionsOrganizationPermissions.ActionsOrganizationPermissions.property.forEach"></a>

```python
for_each: ITerraformIterator
```

- *Type:* cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-github.actionsOrganizationPermissions.ActionsOrganizationPermissions.property.lifecycle"></a>

```python
lifecycle: TerraformResourceLifecycle
```

- *Type:* cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-github.actionsOrganizationPermissions.ActionsOrganizationPermissions.property.provider"></a>

```python
provider: TerraformProvider
```

- *Type:* cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktf/provider-github.actionsOrganizationPermissions.ActionsOrganizationPermissions.property.provisioners"></a>

```python
provisioners: typing.List[FileProvisioner | LocalExecProvisioner | RemoteExecProvisioner]
```

- *Type:* typing.List[cdktf.FileProvisioner | cdktf.LocalExecProvisioner | cdktf.RemoteExecProvisioner]

---

##### `allowed_actions_config`<sup>Required</sup> <a name="allowed_actions_config" id="@cdktf/provider-github.actionsOrganizationPermissions.ActionsOrganizationPermissions.property.allowedActionsConfig"></a>

```python
allowed_actions_config: ActionsOrganizationPermissionsAllowedActionsConfigOutputReference
```

- *Type:* <a href="#@cdktf/provider-github.actionsOrganizationPermissions.ActionsOrganizationPermissionsAllowedActionsConfigOutputReference">ActionsOrganizationPermissionsAllowedActionsConfigOutputReference</a>

---

##### `enabled_repositories_config`<sup>Required</sup> <a name="enabled_repositories_config" id="@cdktf/provider-github.actionsOrganizationPermissions.ActionsOrganizationPermissions.property.enabledRepositoriesConfig"></a>

```python
enabled_repositories_config: ActionsOrganizationPermissionsEnabledRepositoriesConfigOutputReference
```

- *Type:* <a href="#@cdktf/provider-github.actionsOrganizationPermissions.ActionsOrganizationPermissionsEnabledRepositoriesConfigOutputReference">ActionsOrganizationPermissionsEnabledRepositoriesConfigOutputReference</a>

---

##### `allowed_actions_config_input`<sup>Optional</sup> <a name="allowed_actions_config_input" id="@cdktf/provider-github.actionsOrganizationPermissions.ActionsOrganizationPermissions.property.allowedActionsConfigInput"></a>

```python
allowed_actions_config_input: ActionsOrganizationPermissionsAllowedActionsConfig
```

- *Type:* <a href="#@cdktf/provider-github.actionsOrganizationPermissions.ActionsOrganizationPermissionsAllowedActionsConfig">ActionsOrganizationPermissionsAllowedActionsConfig</a>

---

##### `allowed_actions_input`<sup>Optional</sup> <a name="allowed_actions_input" id="@cdktf/provider-github.actionsOrganizationPermissions.ActionsOrganizationPermissions.property.allowedActionsInput"></a>

```python
allowed_actions_input: str
```

- *Type:* str

---

##### `enabled_repositories_config_input`<sup>Optional</sup> <a name="enabled_repositories_config_input" id="@cdktf/provider-github.actionsOrganizationPermissions.ActionsOrganizationPermissions.property.enabledRepositoriesConfigInput"></a>

```python
enabled_repositories_config_input: ActionsOrganizationPermissionsEnabledRepositoriesConfig
```

- *Type:* <a href="#@cdktf/provider-github.actionsOrganizationPermissions.ActionsOrganizationPermissionsEnabledRepositoriesConfig">ActionsOrganizationPermissionsEnabledRepositoriesConfig</a>

---

##### `enabled_repositories_input`<sup>Optional</sup> <a name="enabled_repositories_input" id="@cdktf/provider-github.actionsOrganizationPermissions.ActionsOrganizationPermissions.property.enabledRepositoriesInput"></a>

```python
enabled_repositories_input: str
```

- *Type:* str

---

##### `id_input`<sup>Optional</sup> <a name="id_input" id="@cdktf/provider-github.actionsOrganizationPermissions.ActionsOrganizationPermissions.property.idInput"></a>

```python
id_input: str
```

- *Type:* str

---

##### `allowed_actions`<sup>Required</sup> <a name="allowed_actions" id="@cdktf/provider-github.actionsOrganizationPermissions.ActionsOrganizationPermissions.property.allowedActions"></a>

```python
allowed_actions: str
```

- *Type:* str

---

##### `enabled_repositories`<sup>Required</sup> <a name="enabled_repositories" id="@cdktf/provider-github.actionsOrganizationPermissions.ActionsOrganizationPermissions.property.enabledRepositories"></a>

```python
enabled_repositories: str
```

- *Type:* str

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-github.actionsOrganizationPermissions.ActionsOrganizationPermissions.property.id"></a>

```python
id: str
```

- *Type:* str

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-github.actionsOrganizationPermissions.ActionsOrganizationPermissions.property.tfResourceType">tfResourceType</a></code> | <code>str</code> | *No description.* |

---

##### `tfResourceType`<sup>Required</sup> <a name="tfResourceType" id="@cdktf/provider-github.actionsOrganizationPermissions.ActionsOrganizationPermissions.property.tfResourceType"></a>

```python
tfResourceType: str
```

- *Type:* str

---

## Structs <a name="Structs" id="Structs"></a>

### ActionsOrganizationPermissionsAllowedActionsConfig <a name="ActionsOrganizationPermissionsAllowedActionsConfig" id="@cdktf/provider-github.actionsOrganizationPermissions.ActionsOrganizationPermissionsAllowedActionsConfig"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-github.actionsOrganizationPermissions.ActionsOrganizationPermissionsAllowedActionsConfig.Initializer"></a>

```python
from cdktf_cdktf_provider_github import actions_organization_permissions

actionsOrganizationPermissions.ActionsOrganizationPermissionsAllowedActionsConfig(
  github_owned_allowed: bool | IResolvable,
  patterns_allowed: typing.List[str] = None,
  verified_allowed: bool | IResolvable = None
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-github.actionsOrganizationPermissions.ActionsOrganizationPermissionsAllowedActionsConfig.property.githubOwnedAllowed">github_owned_allowed</a></code> | <code>bool \| cdktf.IResolvable</code> | Whether GitHub-owned actions are allowed in the organization. |
| <code><a href="#@cdktf/provider-github.actionsOrganizationPermissions.ActionsOrganizationPermissionsAllowedActionsConfig.property.patternsAllowed">patterns_allowed</a></code> | <code>typing.List[str]</code> | Specifies a list of string-matching patterns to allow specific action(s). |
| <code><a href="#@cdktf/provider-github.actionsOrganizationPermissions.ActionsOrganizationPermissionsAllowedActionsConfig.property.verifiedAllowed">verified_allowed</a></code> | <code>bool \| cdktf.IResolvable</code> | Whether actions in GitHub Marketplace from verified creators are allowed. |

---

##### `github_owned_allowed`<sup>Required</sup> <a name="github_owned_allowed" id="@cdktf/provider-github.actionsOrganizationPermissions.ActionsOrganizationPermissionsAllowedActionsConfig.property.githubOwnedAllowed"></a>

```python
github_owned_allowed: bool | IResolvable
```

- *Type:* bool | cdktf.IResolvable

Whether GitHub-owned actions are allowed in the organization.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/integrations/github/6.8.2/docs/resources/actions_organization_permissions#github_owned_allowed ActionsOrganizationPermissions#github_owned_allowed}

---

##### `patterns_allowed`<sup>Optional</sup> <a name="patterns_allowed" id="@cdktf/provider-github.actionsOrganizationPermissions.ActionsOrganizationPermissionsAllowedActionsConfig.property.patternsAllowed"></a>

```python
patterns_allowed: typing.List[str]
```

- *Type:* typing.List[str]

Specifies a list of string-matching patterns to allow specific action(s).

Wildcards, tags, and SHAs are allowed. For example, 'monalisa/octocat@', 'monalisa/octocat@v2', 'monalisa/'.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/integrations/github/6.8.2/docs/resources/actions_organization_permissions#patterns_allowed ActionsOrganizationPermissions#patterns_allowed}

---

##### `verified_allowed`<sup>Optional</sup> <a name="verified_allowed" id="@cdktf/provider-github.actionsOrganizationPermissions.ActionsOrganizationPermissionsAllowedActionsConfig.property.verifiedAllowed"></a>

```python
verified_allowed: bool | IResolvable
```

- *Type:* bool | cdktf.IResolvable

Whether actions in GitHub Marketplace from verified creators are allowed.

Set to 'true' to allow all GitHub Marketplace actions by verified creators.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/integrations/github/6.8.2/docs/resources/actions_organization_permissions#verified_allowed ActionsOrganizationPermissions#verified_allowed}

---

### ActionsOrganizationPermissionsConfig <a name="ActionsOrganizationPermissionsConfig" id="@cdktf/provider-github.actionsOrganizationPermissions.ActionsOrganizationPermissionsConfig"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-github.actionsOrganizationPermissions.ActionsOrganizationPermissionsConfig.Initializer"></a>

```python
from cdktf_cdktf_provider_github import actions_organization_permissions

actionsOrganizationPermissions.ActionsOrganizationPermissionsConfig(
  connection: SSHProvisionerConnection | WinrmProvisionerConnection = None,
  count: typing.Union[int, float] | TerraformCount = None,
  depends_on: typing.List[ITerraformDependable] = None,
  for_each: ITerraformIterator = None,
  lifecycle: TerraformResourceLifecycle = None,
  provider: TerraformProvider = None,
  provisioners: typing.List[FileProvisioner | LocalExecProvisioner | RemoteExecProvisioner] = None,
  enabled_repositories: str,
  allowed_actions: str = None,
  allowed_actions_config: ActionsOrganizationPermissionsAllowedActionsConfig = None,
  enabled_repositories_config: ActionsOrganizationPermissionsEnabledRepositoriesConfig = None,
  id: str = None
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-github.actionsOrganizationPermissions.ActionsOrganizationPermissionsConfig.property.connection">connection</a></code> | <code>cdktf.SSHProvisionerConnection \| cdktf.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktf/provider-github.actionsOrganizationPermissions.ActionsOrganizationPermissionsConfig.property.count">count</a></code> | <code>typing.Union[int, float] \| cdktf.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktf/provider-github.actionsOrganizationPermissions.ActionsOrganizationPermissionsConfig.property.dependsOn">depends_on</a></code> | <code>typing.List[cdktf.ITerraformDependable]</code> | *No description.* |
| <code><a href="#@cdktf/provider-github.actionsOrganizationPermissions.ActionsOrganizationPermissionsConfig.property.forEach">for_each</a></code> | <code>cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-github.actionsOrganizationPermissions.ActionsOrganizationPermissionsConfig.property.lifecycle">lifecycle</a></code> | <code>cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-github.actionsOrganizationPermissions.ActionsOrganizationPermissionsConfig.property.provider">provider</a></code> | <code>cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-github.actionsOrganizationPermissions.ActionsOrganizationPermissionsConfig.property.provisioners">provisioners</a></code> | <code>typing.List[cdktf.FileProvisioner \| cdktf.LocalExecProvisioner \| cdktf.RemoteExecProvisioner]</code> | *No description.* |
| <code><a href="#@cdktf/provider-github.actionsOrganizationPermissions.ActionsOrganizationPermissionsConfig.property.enabledRepositories">enabled_repositories</a></code> | <code>str</code> | The policy that controls the repositories in the organization that are allowed to run GitHub Actions. |
| <code><a href="#@cdktf/provider-github.actionsOrganizationPermissions.ActionsOrganizationPermissionsConfig.property.allowedActions">allowed_actions</a></code> | <code>str</code> | The permissions policy that controls the actions that are allowed to run. |
| <code><a href="#@cdktf/provider-github.actionsOrganizationPermissions.ActionsOrganizationPermissionsConfig.property.allowedActionsConfig">allowed_actions_config</a></code> | <code><a href="#@cdktf/provider-github.actionsOrganizationPermissions.ActionsOrganizationPermissionsAllowedActionsConfig">ActionsOrganizationPermissionsAllowedActionsConfig</a></code> | allowed_actions_config block. |
| <code><a href="#@cdktf/provider-github.actionsOrganizationPermissions.ActionsOrganizationPermissionsConfig.property.enabledRepositoriesConfig">enabled_repositories_config</a></code> | <code><a href="#@cdktf/provider-github.actionsOrganizationPermissions.ActionsOrganizationPermissionsEnabledRepositoriesConfig">ActionsOrganizationPermissionsEnabledRepositoriesConfig</a></code> | enabled_repositories_config block. |
| <code><a href="#@cdktf/provider-github.actionsOrganizationPermissions.ActionsOrganizationPermissionsConfig.property.id">id</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/integrations/github/6.8.2/docs/resources/actions_organization_permissions#id ActionsOrganizationPermissions#id}. |

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktf/provider-github.actionsOrganizationPermissions.ActionsOrganizationPermissionsConfig.property.connection"></a>

```python
connection: SSHProvisionerConnection | WinrmProvisionerConnection
```

- *Type:* cdktf.SSHProvisionerConnection | cdktf.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-github.actionsOrganizationPermissions.ActionsOrganizationPermissionsConfig.property.count"></a>

```python
count: typing.Union[int, float] | TerraformCount
```

- *Type:* typing.Union[int, float] | cdktf.TerraformCount

---

##### `depends_on`<sup>Optional</sup> <a name="depends_on" id="@cdktf/provider-github.actionsOrganizationPermissions.ActionsOrganizationPermissionsConfig.property.dependsOn"></a>

```python
depends_on: typing.List[ITerraformDependable]
```

- *Type:* typing.List[cdktf.ITerraformDependable]

---

##### `for_each`<sup>Optional</sup> <a name="for_each" id="@cdktf/provider-github.actionsOrganizationPermissions.ActionsOrganizationPermissionsConfig.property.forEach"></a>

```python
for_each: ITerraformIterator
```

- *Type:* cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-github.actionsOrganizationPermissions.ActionsOrganizationPermissionsConfig.property.lifecycle"></a>

```python
lifecycle: TerraformResourceLifecycle
```

- *Type:* cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-github.actionsOrganizationPermissions.ActionsOrganizationPermissionsConfig.property.provider"></a>

```python
provider: TerraformProvider
```

- *Type:* cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktf/provider-github.actionsOrganizationPermissions.ActionsOrganizationPermissionsConfig.property.provisioners"></a>

```python
provisioners: typing.List[FileProvisioner | LocalExecProvisioner | RemoteExecProvisioner]
```

- *Type:* typing.List[cdktf.FileProvisioner | cdktf.LocalExecProvisioner | cdktf.RemoteExecProvisioner]

---

##### `enabled_repositories`<sup>Required</sup> <a name="enabled_repositories" id="@cdktf/provider-github.actionsOrganizationPermissions.ActionsOrganizationPermissionsConfig.property.enabledRepositories"></a>

```python
enabled_repositories: str
```

- *Type:* str

The policy that controls the repositories in the organization that are allowed to run GitHub Actions.

Can be one of: 'all', 'none', or 'selected'.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/integrations/github/6.8.2/docs/resources/actions_organization_permissions#enabled_repositories ActionsOrganizationPermissions#enabled_repositories}

---

##### `allowed_actions`<sup>Optional</sup> <a name="allowed_actions" id="@cdktf/provider-github.actionsOrganizationPermissions.ActionsOrganizationPermissionsConfig.property.allowedActions"></a>

```python
allowed_actions: str
```

- *Type:* str

The permissions policy that controls the actions that are allowed to run.

Can be one of: 'all', 'local_only', or 'selected'.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/integrations/github/6.8.2/docs/resources/actions_organization_permissions#allowed_actions ActionsOrganizationPermissions#allowed_actions}

---

##### `allowed_actions_config`<sup>Optional</sup> <a name="allowed_actions_config" id="@cdktf/provider-github.actionsOrganizationPermissions.ActionsOrganizationPermissionsConfig.property.allowedActionsConfig"></a>

```python
allowed_actions_config: ActionsOrganizationPermissionsAllowedActionsConfig
```

- *Type:* <a href="#@cdktf/provider-github.actionsOrganizationPermissions.ActionsOrganizationPermissionsAllowedActionsConfig">ActionsOrganizationPermissionsAllowedActionsConfig</a>

allowed_actions_config block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/integrations/github/6.8.2/docs/resources/actions_organization_permissions#allowed_actions_config ActionsOrganizationPermissions#allowed_actions_config}

---

##### `enabled_repositories_config`<sup>Optional</sup> <a name="enabled_repositories_config" id="@cdktf/provider-github.actionsOrganizationPermissions.ActionsOrganizationPermissionsConfig.property.enabledRepositoriesConfig"></a>

```python
enabled_repositories_config: ActionsOrganizationPermissionsEnabledRepositoriesConfig
```

- *Type:* <a href="#@cdktf/provider-github.actionsOrganizationPermissions.ActionsOrganizationPermissionsEnabledRepositoriesConfig">ActionsOrganizationPermissionsEnabledRepositoriesConfig</a>

enabled_repositories_config block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/integrations/github/6.8.2/docs/resources/actions_organization_permissions#enabled_repositories_config ActionsOrganizationPermissions#enabled_repositories_config}

---

##### `id`<sup>Optional</sup> <a name="id" id="@cdktf/provider-github.actionsOrganizationPermissions.ActionsOrganizationPermissionsConfig.property.id"></a>

```python
id: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/integrations/github/6.8.2/docs/resources/actions_organization_permissions#id ActionsOrganizationPermissions#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

### ActionsOrganizationPermissionsEnabledRepositoriesConfig <a name="ActionsOrganizationPermissionsEnabledRepositoriesConfig" id="@cdktf/provider-github.actionsOrganizationPermissions.ActionsOrganizationPermissionsEnabledRepositoriesConfig"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-github.actionsOrganizationPermissions.ActionsOrganizationPermissionsEnabledRepositoriesConfig.Initializer"></a>

```python
from cdktf_cdktf_provider_github import actions_organization_permissions

actionsOrganizationPermissions.ActionsOrganizationPermissionsEnabledRepositoriesConfig(
  repository_ids: typing.List[typing.Union[int, float]]
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-github.actionsOrganizationPermissions.ActionsOrganizationPermissionsEnabledRepositoriesConfig.property.repositoryIds">repository_ids</a></code> | <code>typing.List[typing.Union[int, float]]</code> | List of repository IDs to enable for GitHub Actions. |

---

##### `repository_ids`<sup>Required</sup> <a name="repository_ids" id="@cdktf/provider-github.actionsOrganizationPermissions.ActionsOrganizationPermissionsEnabledRepositoriesConfig.property.repositoryIds"></a>

```python
repository_ids: typing.List[typing.Union[int, float]]
```

- *Type:* typing.List[typing.Union[int, float]]

List of repository IDs to enable for GitHub Actions.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/integrations/github/6.8.2/docs/resources/actions_organization_permissions#repository_ids ActionsOrganizationPermissions#repository_ids}

---

## Classes <a name="Classes" id="Classes"></a>

### ActionsOrganizationPermissionsAllowedActionsConfigOutputReference <a name="ActionsOrganizationPermissionsAllowedActionsConfigOutputReference" id="@cdktf/provider-github.actionsOrganizationPermissions.ActionsOrganizationPermissionsAllowedActionsConfigOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-github.actionsOrganizationPermissions.ActionsOrganizationPermissionsAllowedActionsConfigOutputReference.Initializer"></a>

```python
from cdktf_cdktf_provider_github import actions_organization_permissions

actionsOrganizationPermissions.ActionsOrganizationPermissionsAllowedActionsConfigOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-github.actionsOrganizationPermissions.ActionsOrganizationPermissionsAllowedActionsConfigOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-github.actionsOrganizationPermissions.ActionsOrganizationPermissionsAllowedActionsConfigOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktf/provider-github.actionsOrganizationPermissions.ActionsOrganizationPermissionsAllowedActionsConfigOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-github.actionsOrganizationPermissions.ActionsOrganizationPermissionsAllowedActionsConfigOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-github.actionsOrganizationPermissions.ActionsOrganizationPermissionsAllowedActionsConfigOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-github.actionsOrganizationPermissions.ActionsOrganizationPermissionsAllowedActionsConfigOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-github.actionsOrganizationPermissions.ActionsOrganizationPermissionsAllowedActionsConfigOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-github.actionsOrganizationPermissions.ActionsOrganizationPermissionsAllowedActionsConfigOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-github.actionsOrganizationPermissions.ActionsOrganizationPermissionsAllowedActionsConfigOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-github.actionsOrganizationPermissions.ActionsOrganizationPermissionsAllowedActionsConfigOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-github.actionsOrganizationPermissions.ActionsOrganizationPermissionsAllowedActionsConfigOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-github.actionsOrganizationPermissions.ActionsOrganizationPermissionsAllowedActionsConfigOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-github.actionsOrganizationPermissions.ActionsOrganizationPermissionsAllowedActionsConfigOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-github.actionsOrganizationPermissions.ActionsOrganizationPermissionsAllowedActionsConfigOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-github.actionsOrganizationPermissions.ActionsOrganizationPermissionsAllowedActionsConfigOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-github.actionsOrganizationPermissions.ActionsOrganizationPermissionsAllowedActionsConfigOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-github.actionsOrganizationPermissions.ActionsOrganizationPermissionsAllowedActionsConfigOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-github.actionsOrganizationPermissions.ActionsOrganizationPermissionsAllowedActionsConfigOutputReference.resetPatternsAllowed">reset_patterns_allowed</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-github.actionsOrganizationPermissions.ActionsOrganizationPermissionsAllowedActionsConfigOutputReference.resetVerifiedAllowed">reset_verified_allowed</a></code> | *No description.* |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktf/provider-github.actionsOrganizationPermissions.ActionsOrganizationPermissionsAllowedActionsConfigOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktf/provider-github.actionsOrganizationPermissions.ActionsOrganizationPermissionsAllowedActionsConfigOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-github.actionsOrganizationPermissions.ActionsOrganizationPermissionsAllowedActionsConfigOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktf/provider-github.actionsOrganizationPermissions.ActionsOrganizationPermissionsAllowedActionsConfigOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-github.actionsOrganizationPermissions.ActionsOrganizationPermissionsAllowedActionsConfigOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktf/provider-github.actionsOrganizationPermissions.ActionsOrganizationPermissionsAllowedActionsConfigOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-github.actionsOrganizationPermissions.ActionsOrganizationPermissionsAllowedActionsConfigOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktf/provider-github.actionsOrganizationPermissions.ActionsOrganizationPermissionsAllowedActionsConfigOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-github.actionsOrganizationPermissions.ActionsOrganizationPermissionsAllowedActionsConfigOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktf/provider-github.actionsOrganizationPermissions.ActionsOrganizationPermissionsAllowedActionsConfigOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-github.actionsOrganizationPermissions.ActionsOrganizationPermissionsAllowedActionsConfigOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktf/provider-github.actionsOrganizationPermissions.ActionsOrganizationPermissionsAllowedActionsConfigOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-github.actionsOrganizationPermissions.ActionsOrganizationPermissionsAllowedActionsConfigOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktf/provider-github.actionsOrganizationPermissions.ActionsOrganizationPermissionsAllowedActionsConfigOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-github.actionsOrganizationPermissions.ActionsOrganizationPermissionsAllowedActionsConfigOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktf/provider-github.actionsOrganizationPermissions.ActionsOrganizationPermissionsAllowedActionsConfigOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-github.actionsOrganizationPermissions.ActionsOrganizationPermissionsAllowedActionsConfigOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktf/provider-github.actionsOrganizationPermissions.ActionsOrganizationPermissionsAllowedActionsConfigOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-github.actionsOrganizationPermissions.ActionsOrganizationPermissionsAllowedActionsConfigOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktf/provider-github.actionsOrganizationPermissions.ActionsOrganizationPermissionsAllowedActionsConfigOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-github.actionsOrganizationPermissions.ActionsOrganizationPermissionsAllowedActionsConfigOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktf/provider-github.actionsOrganizationPermissions.ActionsOrganizationPermissionsAllowedActionsConfigOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-github.actionsOrganizationPermissions.ActionsOrganizationPermissionsAllowedActionsConfigOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktf/provider-github.actionsOrganizationPermissions.ActionsOrganizationPermissionsAllowedActionsConfigOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `reset_patterns_allowed` <a name="reset_patterns_allowed" id="@cdktf/provider-github.actionsOrganizationPermissions.ActionsOrganizationPermissionsAllowedActionsConfigOutputReference.resetPatternsAllowed"></a>

```python
def reset_patterns_allowed() -> None
```

##### `reset_verified_allowed` <a name="reset_verified_allowed" id="@cdktf/provider-github.actionsOrganizationPermissions.ActionsOrganizationPermissionsAllowedActionsConfigOutputReference.resetVerifiedAllowed"></a>

```python
def reset_verified_allowed() -> None
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-github.actionsOrganizationPermissions.ActionsOrganizationPermissionsAllowedActionsConfigOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-github.actionsOrganizationPermissions.ActionsOrganizationPermissionsAllowedActionsConfigOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-github.actionsOrganizationPermissions.ActionsOrganizationPermissionsAllowedActionsConfigOutputReference.property.githubOwnedAllowedInput">github_owned_allowed_input</a></code> | <code>bool \| cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-github.actionsOrganizationPermissions.ActionsOrganizationPermissionsAllowedActionsConfigOutputReference.property.patternsAllowedInput">patterns_allowed_input</a></code> | <code>typing.List[str]</code> | *No description.* |
| <code><a href="#@cdktf/provider-github.actionsOrganizationPermissions.ActionsOrganizationPermissionsAllowedActionsConfigOutputReference.property.verifiedAllowedInput">verified_allowed_input</a></code> | <code>bool \| cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-github.actionsOrganizationPermissions.ActionsOrganizationPermissionsAllowedActionsConfigOutputReference.property.githubOwnedAllowed">github_owned_allowed</a></code> | <code>bool \| cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-github.actionsOrganizationPermissions.ActionsOrganizationPermissionsAllowedActionsConfigOutputReference.property.patternsAllowed">patterns_allowed</a></code> | <code>typing.List[str]</code> | *No description.* |
| <code><a href="#@cdktf/provider-github.actionsOrganizationPermissions.ActionsOrganizationPermissionsAllowedActionsConfigOutputReference.property.verifiedAllowed">verified_allowed</a></code> | <code>bool \| cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-github.actionsOrganizationPermissions.ActionsOrganizationPermissionsAllowedActionsConfigOutputReference.property.internalValue">internal_value</a></code> | <code><a href="#@cdktf/provider-github.actionsOrganizationPermissions.ActionsOrganizationPermissionsAllowedActionsConfig">ActionsOrganizationPermissionsAllowedActionsConfig</a></code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktf/provider-github.actionsOrganizationPermissions.ActionsOrganizationPermissionsAllowedActionsConfigOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-github.actionsOrganizationPermissions.ActionsOrganizationPermissionsAllowedActionsConfigOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `github_owned_allowed_input`<sup>Optional</sup> <a name="github_owned_allowed_input" id="@cdktf/provider-github.actionsOrganizationPermissions.ActionsOrganizationPermissionsAllowedActionsConfigOutputReference.property.githubOwnedAllowedInput"></a>

```python
github_owned_allowed_input: bool | IResolvable
```

- *Type:* bool | cdktf.IResolvable

---

##### `patterns_allowed_input`<sup>Optional</sup> <a name="patterns_allowed_input" id="@cdktf/provider-github.actionsOrganizationPermissions.ActionsOrganizationPermissionsAllowedActionsConfigOutputReference.property.patternsAllowedInput"></a>

```python
patterns_allowed_input: typing.List[str]
```

- *Type:* typing.List[str]

---

##### `verified_allowed_input`<sup>Optional</sup> <a name="verified_allowed_input" id="@cdktf/provider-github.actionsOrganizationPermissions.ActionsOrganizationPermissionsAllowedActionsConfigOutputReference.property.verifiedAllowedInput"></a>

```python
verified_allowed_input: bool | IResolvable
```

- *Type:* bool | cdktf.IResolvable

---

##### `github_owned_allowed`<sup>Required</sup> <a name="github_owned_allowed" id="@cdktf/provider-github.actionsOrganizationPermissions.ActionsOrganizationPermissionsAllowedActionsConfigOutputReference.property.githubOwnedAllowed"></a>

```python
github_owned_allowed: bool | IResolvable
```

- *Type:* bool | cdktf.IResolvable

---

##### `patterns_allowed`<sup>Required</sup> <a name="patterns_allowed" id="@cdktf/provider-github.actionsOrganizationPermissions.ActionsOrganizationPermissionsAllowedActionsConfigOutputReference.property.patternsAllowed"></a>

```python
patterns_allowed: typing.List[str]
```

- *Type:* typing.List[str]

---

##### `verified_allowed`<sup>Required</sup> <a name="verified_allowed" id="@cdktf/provider-github.actionsOrganizationPermissions.ActionsOrganizationPermissionsAllowedActionsConfigOutputReference.property.verifiedAllowed"></a>

```python
verified_allowed: bool | IResolvable
```

- *Type:* bool | cdktf.IResolvable

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktf/provider-github.actionsOrganizationPermissions.ActionsOrganizationPermissionsAllowedActionsConfigOutputReference.property.internalValue"></a>

```python
internal_value: ActionsOrganizationPermissionsAllowedActionsConfig
```

- *Type:* <a href="#@cdktf/provider-github.actionsOrganizationPermissions.ActionsOrganizationPermissionsAllowedActionsConfig">ActionsOrganizationPermissionsAllowedActionsConfig</a>

---


### ActionsOrganizationPermissionsEnabledRepositoriesConfigOutputReference <a name="ActionsOrganizationPermissionsEnabledRepositoriesConfigOutputReference" id="@cdktf/provider-github.actionsOrganizationPermissions.ActionsOrganizationPermissionsEnabledRepositoriesConfigOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-github.actionsOrganizationPermissions.ActionsOrganizationPermissionsEnabledRepositoriesConfigOutputReference.Initializer"></a>

```python
from cdktf_cdktf_provider_github import actions_organization_permissions

actionsOrganizationPermissions.ActionsOrganizationPermissionsEnabledRepositoriesConfigOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-github.actionsOrganizationPermissions.ActionsOrganizationPermissionsEnabledRepositoriesConfigOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-github.actionsOrganizationPermissions.ActionsOrganizationPermissionsEnabledRepositoriesConfigOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktf/provider-github.actionsOrganizationPermissions.ActionsOrganizationPermissionsEnabledRepositoriesConfigOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-github.actionsOrganizationPermissions.ActionsOrganizationPermissionsEnabledRepositoriesConfigOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-github.actionsOrganizationPermissions.ActionsOrganizationPermissionsEnabledRepositoriesConfigOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-github.actionsOrganizationPermissions.ActionsOrganizationPermissionsEnabledRepositoriesConfigOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-github.actionsOrganizationPermissions.ActionsOrganizationPermissionsEnabledRepositoriesConfigOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-github.actionsOrganizationPermissions.ActionsOrganizationPermissionsEnabledRepositoriesConfigOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-github.actionsOrganizationPermissions.ActionsOrganizationPermissionsEnabledRepositoriesConfigOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-github.actionsOrganizationPermissions.ActionsOrganizationPermissionsEnabledRepositoriesConfigOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-github.actionsOrganizationPermissions.ActionsOrganizationPermissionsEnabledRepositoriesConfigOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-github.actionsOrganizationPermissions.ActionsOrganizationPermissionsEnabledRepositoriesConfigOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-github.actionsOrganizationPermissions.ActionsOrganizationPermissionsEnabledRepositoriesConfigOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-github.actionsOrganizationPermissions.ActionsOrganizationPermissionsEnabledRepositoriesConfigOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-github.actionsOrganizationPermissions.ActionsOrganizationPermissionsEnabledRepositoriesConfigOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-github.actionsOrganizationPermissions.ActionsOrganizationPermissionsEnabledRepositoriesConfigOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-github.actionsOrganizationPermissions.ActionsOrganizationPermissionsEnabledRepositoriesConfigOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktf/provider-github.actionsOrganizationPermissions.ActionsOrganizationPermissionsEnabledRepositoriesConfigOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktf/provider-github.actionsOrganizationPermissions.ActionsOrganizationPermissionsEnabledRepositoriesConfigOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-github.actionsOrganizationPermissions.ActionsOrganizationPermissionsEnabledRepositoriesConfigOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktf/provider-github.actionsOrganizationPermissions.ActionsOrganizationPermissionsEnabledRepositoriesConfigOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-github.actionsOrganizationPermissions.ActionsOrganizationPermissionsEnabledRepositoriesConfigOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktf/provider-github.actionsOrganizationPermissions.ActionsOrganizationPermissionsEnabledRepositoriesConfigOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-github.actionsOrganizationPermissions.ActionsOrganizationPermissionsEnabledRepositoriesConfigOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktf/provider-github.actionsOrganizationPermissions.ActionsOrganizationPermissionsEnabledRepositoriesConfigOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-github.actionsOrganizationPermissions.ActionsOrganizationPermissionsEnabledRepositoriesConfigOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktf/provider-github.actionsOrganizationPermissions.ActionsOrganizationPermissionsEnabledRepositoriesConfigOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-github.actionsOrganizationPermissions.ActionsOrganizationPermissionsEnabledRepositoriesConfigOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktf/provider-github.actionsOrganizationPermissions.ActionsOrganizationPermissionsEnabledRepositoriesConfigOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-github.actionsOrganizationPermissions.ActionsOrganizationPermissionsEnabledRepositoriesConfigOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktf/provider-github.actionsOrganizationPermissions.ActionsOrganizationPermissionsEnabledRepositoriesConfigOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-github.actionsOrganizationPermissions.ActionsOrganizationPermissionsEnabledRepositoriesConfigOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktf/provider-github.actionsOrganizationPermissions.ActionsOrganizationPermissionsEnabledRepositoriesConfigOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-github.actionsOrganizationPermissions.ActionsOrganizationPermissionsEnabledRepositoriesConfigOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktf/provider-github.actionsOrganizationPermissions.ActionsOrganizationPermissionsEnabledRepositoriesConfigOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-github.actionsOrganizationPermissions.ActionsOrganizationPermissionsEnabledRepositoriesConfigOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktf/provider-github.actionsOrganizationPermissions.ActionsOrganizationPermissionsEnabledRepositoriesConfigOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-github.actionsOrganizationPermissions.ActionsOrganizationPermissionsEnabledRepositoriesConfigOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktf/provider-github.actionsOrganizationPermissions.ActionsOrganizationPermissionsEnabledRepositoriesConfigOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-github.actionsOrganizationPermissions.ActionsOrganizationPermissionsEnabledRepositoriesConfigOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktf/provider-github.actionsOrganizationPermissions.ActionsOrganizationPermissionsEnabledRepositoriesConfigOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-github.actionsOrganizationPermissions.ActionsOrganizationPermissionsEnabledRepositoriesConfigOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-github.actionsOrganizationPermissions.ActionsOrganizationPermissionsEnabledRepositoriesConfigOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-github.actionsOrganizationPermissions.ActionsOrganizationPermissionsEnabledRepositoriesConfigOutputReference.property.repositoryIdsInput">repository_ids_input</a></code> | <code>typing.List[typing.Union[int, float]]</code> | *No description.* |
| <code><a href="#@cdktf/provider-github.actionsOrganizationPermissions.ActionsOrganizationPermissionsEnabledRepositoriesConfigOutputReference.property.repositoryIds">repository_ids</a></code> | <code>typing.List[typing.Union[int, float]]</code> | *No description.* |
| <code><a href="#@cdktf/provider-github.actionsOrganizationPermissions.ActionsOrganizationPermissionsEnabledRepositoriesConfigOutputReference.property.internalValue">internal_value</a></code> | <code><a href="#@cdktf/provider-github.actionsOrganizationPermissions.ActionsOrganizationPermissionsEnabledRepositoriesConfig">ActionsOrganizationPermissionsEnabledRepositoriesConfig</a></code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktf/provider-github.actionsOrganizationPermissions.ActionsOrganizationPermissionsEnabledRepositoriesConfigOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-github.actionsOrganizationPermissions.ActionsOrganizationPermissionsEnabledRepositoriesConfigOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `repository_ids_input`<sup>Optional</sup> <a name="repository_ids_input" id="@cdktf/provider-github.actionsOrganizationPermissions.ActionsOrganizationPermissionsEnabledRepositoriesConfigOutputReference.property.repositoryIdsInput"></a>

```python
repository_ids_input: typing.List[typing.Union[int, float]]
```

- *Type:* typing.List[typing.Union[int, float]]

---

##### `repository_ids`<sup>Required</sup> <a name="repository_ids" id="@cdktf/provider-github.actionsOrganizationPermissions.ActionsOrganizationPermissionsEnabledRepositoriesConfigOutputReference.property.repositoryIds"></a>

```python
repository_ids: typing.List[typing.Union[int, float]]
```

- *Type:* typing.List[typing.Union[int, float]]

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktf/provider-github.actionsOrganizationPermissions.ActionsOrganizationPermissionsEnabledRepositoriesConfigOutputReference.property.internalValue"></a>

```python
internal_value: ActionsOrganizationPermissionsEnabledRepositoriesConfig
```

- *Type:* <a href="#@cdktf/provider-github.actionsOrganizationPermissions.ActionsOrganizationPermissionsEnabledRepositoriesConfig">ActionsOrganizationPermissionsEnabledRepositoriesConfig</a>

---



