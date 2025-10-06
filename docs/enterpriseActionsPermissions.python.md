# `enterpriseActionsPermissions` Submodule <a name="`enterpriseActionsPermissions` Submodule" id="@cdktf/provider-github.enterpriseActionsPermissions"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### EnterpriseActionsPermissions <a name="EnterpriseActionsPermissions" id="@cdktf/provider-github.enterpriseActionsPermissions.EnterpriseActionsPermissions"></a>

Represents a {@link https://registry.terraform.io/providers/integrations/github/6.6.0/docs/resources/enterprise_actions_permissions github_enterprise_actions_permissions}.

#### Initializers <a name="Initializers" id="@cdktf/provider-github.enterpriseActionsPermissions.EnterpriseActionsPermissions.Initializer"></a>

```python
from cdktf_cdktf_provider_github import enterprise_actions_permissions

enterpriseActionsPermissions.EnterpriseActionsPermissions(
  scope: Construct,
  id: str,
  connection: SSHProvisionerConnection | WinrmProvisionerConnection = None,
  count: typing.Union[int, float] | TerraformCount = None,
  depends_on: typing.List[ITerraformDependable] = None,
  for_each: ITerraformIterator = None,
  lifecycle: TerraformResourceLifecycle = None,
  provider: TerraformProvider = None,
  provisioners: typing.List[FileProvisioner | LocalExecProvisioner | RemoteExecProvisioner] = None,
  enabled_organizations: str,
  enterprise_slug: str,
  allowed_actions: str = None,
  allowed_actions_config: EnterpriseActionsPermissionsAllowedActionsConfig = None,
  enabled_organizations_config: EnterpriseActionsPermissionsEnabledOrganizationsConfig = None,
  id: str = None
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-github.enterpriseActionsPermissions.EnterpriseActionsPermissions.Initializer.parameter.scope">scope</a></code> | <code>constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktf/provider-github.enterpriseActionsPermissions.EnterpriseActionsPermissions.Initializer.parameter.id">id</a></code> | <code>str</code> | The scoped construct ID. |
| <code><a href="#@cdktf/provider-github.enterpriseActionsPermissions.EnterpriseActionsPermissions.Initializer.parameter.connection">connection</a></code> | <code>cdktf.SSHProvisionerConnection \| cdktf.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktf/provider-github.enterpriseActionsPermissions.EnterpriseActionsPermissions.Initializer.parameter.count">count</a></code> | <code>typing.Union[int, float] \| cdktf.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktf/provider-github.enterpriseActionsPermissions.EnterpriseActionsPermissions.Initializer.parameter.dependsOn">depends_on</a></code> | <code>typing.List[cdktf.ITerraformDependable]</code> | *No description.* |
| <code><a href="#@cdktf/provider-github.enterpriseActionsPermissions.EnterpriseActionsPermissions.Initializer.parameter.forEach">for_each</a></code> | <code>cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-github.enterpriseActionsPermissions.EnterpriseActionsPermissions.Initializer.parameter.lifecycle">lifecycle</a></code> | <code>cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-github.enterpriseActionsPermissions.EnterpriseActionsPermissions.Initializer.parameter.provider">provider</a></code> | <code>cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-github.enterpriseActionsPermissions.EnterpriseActionsPermissions.Initializer.parameter.provisioners">provisioners</a></code> | <code>typing.List[cdktf.FileProvisioner \| cdktf.LocalExecProvisioner \| cdktf.RemoteExecProvisioner]</code> | *No description.* |
| <code><a href="#@cdktf/provider-github.enterpriseActionsPermissions.EnterpriseActionsPermissions.Initializer.parameter.enabledOrganizations">enabled_organizations</a></code> | <code>str</code> | The policy that controls the organizations in the enterprise that are allowed to run GitHub Actions. |
| <code><a href="#@cdktf/provider-github.enterpriseActionsPermissions.EnterpriseActionsPermissions.Initializer.parameter.enterpriseSlug">enterprise_slug</a></code> | <code>str</code> | The slug of the enterprise. |
| <code><a href="#@cdktf/provider-github.enterpriseActionsPermissions.EnterpriseActionsPermissions.Initializer.parameter.allowedActions">allowed_actions</a></code> | <code>str</code> | The permissions policy that controls the actions that are allowed to run. |
| <code><a href="#@cdktf/provider-github.enterpriseActionsPermissions.EnterpriseActionsPermissions.Initializer.parameter.allowedActionsConfig">allowed_actions_config</a></code> | <code><a href="#@cdktf/provider-github.enterpriseActionsPermissions.EnterpriseActionsPermissionsAllowedActionsConfig">EnterpriseActionsPermissionsAllowedActionsConfig</a></code> | allowed_actions_config block. |
| <code><a href="#@cdktf/provider-github.enterpriseActionsPermissions.EnterpriseActionsPermissions.Initializer.parameter.enabledOrganizationsConfig">enabled_organizations_config</a></code> | <code><a href="#@cdktf/provider-github.enterpriseActionsPermissions.EnterpriseActionsPermissionsEnabledOrganizationsConfig">EnterpriseActionsPermissionsEnabledOrganizationsConfig</a></code> | enabled_organizations_config block. |
| <code><a href="#@cdktf/provider-github.enterpriseActionsPermissions.EnterpriseActionsPermissions.Initializer.parameter.id">id</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/integrations/github/6.6.0/docs/resources/enterprise_actions_permissions#id EnterpriseActionsPermissions#id}. |

---

##### `scope`<sup>Required</sup> <a name="scope" id="@cdktf/provider-github.enterpriseActionsPermissions.EnterpriseActionsPermissions.Initializer.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-github.enterpriseActionsPermissions.EnterpriseActionsPermissions.Initializer.parameter.id"></a>

- *Type:* str

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktf/provider-github.enterpriseActionsPermissions.EnterpriseActionsPermissions.Initializer.parameter.connection"></a>

- *Type:* cdktf.SSHProvisionerConnection | cdktf.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-github.enterpriseActionsPermissions.EnterpriseActionsPermissions.Initializer.parameter.count"></a>

- *Type:* typing.Union[int, float] | cdktf.TerraformCount

---

##### `depends_on`<sup>Optional</sup> <a name="depends_on" id="@cdktf/provider-github.enterpriseActionsPermissions.EnterpriseActionsPermissions.Initializer.parameter.dependsOn"></a>

- *Type:* typing.List[cdktf.ITerraformDependable]

---

##### `for_each`<sup>Optional</sup> <a name="for_each" id="@cdktf/provider-github.enterpriseActionsPermissions.EnterpriseActionsPermissions.Initializer.parameter.forEach"></a>

- *Type:* cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-github.enterpriseActionsPermissions.EnterpriseActionsPermissions.Initializer.parameter.lifecycle"></a>

- *Type:* cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-github.enterpriseActionsPermissions.EnterpriseActionsPermissions.Initializer.parameter.provider"></a>

- *Type:* cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktf/provider-github.enterpriseActionsPermissions.EnterpriseActionsPermissions.Initializer.parameter.provisioners"></a>

- *Type:* typing.List[cdktf.FileProvisioner | cdktf.LocalExecProvisioner | cdktf.RemoteExecProvisioner]

---

##### `enabled_organizations`<sup>Required</sup> <a name="enabled_organizations" id="@cdktf/provider-github.enterpriseActionsPermissions.EnterpriseActionsPermissions.Initializer.parameter.enabledOrganizations"></a>

- *Type:* str

The policy that controls the organizations in the enterprise that are allowed to run GitHub Actions.

Can be one of: 'all', 'none', or 'selected'.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/integrations/github/6.6.0/docs/resources/enterprise_actions_permissions#enabled_organizations EnterpriseActionsPermissions#enabled_organizations}

---

##### `enterprise_slug`<sup>Required</sup> <a name="enterprise_slug" id="@cdktf/provider-github.enterpriseActionsPermissions.EnterpriseActionsPermissions.Initializer.parameter.enterpriseSlug"></a>

- *Type:* str

The slug of the enterprise.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/integrations/github/6.6.0/docs/resources/enterprise_actions_permissions#enterprise_slug EnterpriseActionsPermissions#enterprise_slug}

---

##### `allowed_actions`<sup>Optional</sup> <a name="allowed_actions" id="@cdktf/provider-github.enterpriseActionsPermissions.EnterpriseActionsPermissions.Initializer.parameter.allowedActions"></a>

- *Type:* str

The permissions policy that controls the actions that are allowed to run.

Can be one of: 'all', 'local_only', or 'selected'.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/integrations/github/6.6.0/docs/resources/enterprise_actions_permissions#allowed_actions EnterpriseActionsPermissions#allowed_actions}

---

##### `allowed_actions_config`<sup>Optional</sup> <a name="allowed_actions_config" id="@cdktf/provider-github.enterpriseActionsPermissions.EnterpriseActionsPermissions.Initializer.parameter.allowedActionsConfig"></a>

- *Type:* <a href="#@cdktf/provider-github.enterpriseActionsPermissions.EnterpriseActionsPermissionsAllowedActionsConfig">EnterpriseActionsPermissionsAllowedActionsConfig</a>

allowed_actions_config block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/integrations/github/6.6.0/docs/resources/enterprise_actions_permissions#allowed_actions_config EnterpriseActionsPermissions#allowed_actions_config}

---

##### `enabled_organizations_config`<sup>Optional</sup> <a name="enabled_organizations_config" id="@cdktf/provider-github.enterpriseActionsPermissions.EnterpriseActionsPermissions.Initializer.parameter.enabledOrganizationsConfig"></a>

- *Type:* <a href="#@cdktf/provider-github.enterpriseActionsPermissions.EnterpriseActionsPermissionsEnabledOrganizationsConfig">EnterpriseActionsPermissionsEnabledOrganizationsConfig</a>

enabled_organizations_config block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/integrations/github/6.6.0/docs/resources/enterprise_actions_permissions#enabled_organizations_config EnterpriseActionsPermissions#enabled_organizations_config}

---

##### `id`<sup>Optional</sup> <a name="id" id="@cdktf/provider-github.enterpriseActionsPermissions.EnterpriseActionsPermissions.Initializer.parameter.id"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/integrations/github/6.6.0/docs/resources/enterprise_actions_permissions#id EnterpriseActionsPermissions#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-github.enterpriseActionsPermissions.EnterpriseActionsPermissions.toString">to_string</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktf/provider-github.enterpriseActionsPermissions.EnterpriseActionsPermissions.addOverride">add_override</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-github.enterpriseActionsPermissions.EnterpriseActionsPermissions.overrideLogicalId">override_logical_id</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktf/provider-github.enterpriseActionsPermissions.EnterpriseActionsPermissions.resetOverrideLogicalId">reset_override_logical_id</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktf/provider-github.enterpriseActionsPermissions.EnterpriseActionsPermissions.toHclTerraform">to_hcl_terraform</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-github.enterpriseActionsPermissions.EnterpriseActionsPermissions.toMetadata">to_metadata</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-github.enterpriseActionsPermissions.EnterpriseActionsPermissions.toTerraform">to_terraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktf/provider-github.enterpriseActionsPermissions.EnterpriseActionsPermissions.addMoveTarget">add_move_target</a></code> | Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move. |
| <code><a href="#@cdktf/provider-github.enterpriseActionsPermissions.EnterpriseActionsPermissions.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-github.enterpriseActionsPermissions.EnterpriseActionsPermissions.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-github.enterpriseActionsPermissions.EnterpriseActionsPermissions.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-github.enterpriseActionsPermissions.EnterpriseActionsPermissions.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-github.enterpriseActionsPermissions.EnterpriseActionsPermissions.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-github.enterpriseActionsPermissions.EnterpriseActionsPermissions.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-github.enterpriseActionsPermissions.EnterpriseActionsPermissions.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-github.enterpriseActionsPermissions.EnterpriseActionsPermissions.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-github.enterpriseActionsPermissions.EnterpriseActionsPermissions.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-github.enterpriseActionsPermissions.EnterpriseActionsPermissions.hasResourceMove">has_resource_move</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-github.enterpriseActionsPermissions.EnterpriseActionsPermissions.importFrom">import_from</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-github.enterpriseActionsPermissions.EnterpriseActionsPermissions.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-github.enterpriseActionsPermissions.EnterpriseActionsPermissions.moveFromId">move_from_id</a></code> | Move the resource corresponding to "id" to this resource. |
| <code><a href="#@cdktf/provider-github.enterpriseActionsPermissions.EnterpriseActionsPermissions.moveTo">move_to</a></code> | Moves this resource to the target resource given by moveTarget. |
| <code><a href="#@cdktf/provider-github.enterpriseActionsPermissions.EnterpriseActionsPermissions.moveToId">move_to_id</a></code> | Moves this resource to the resource corresponding to "id". |
| <code><a href="#@cdktf/provider-github.enterpriseActionsPermissions.EnterpriseActionsPermissions.putAllowedActionsConfig">put_allowed_actions_config</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-github.enterpriseActionsPermissions.EnterpriseActionsPermissions.putEnabledOrganizationsConfig">put_enabled_organizations_config</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-github.enterpriseActionsPermissions.EnterpriseActionsPermissions.resetAllowedActions">reset_allowed_actions</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-github.enterpriseActionsPermissions.EnterpriseActionsPermissions.resetAllowedActionsConfig">reset_allowed_actions_config</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-github.enterpriseActionsPermissions.EnterpriseActionsPermissions.resetEnabledOrganizationsConfig">reset_enabled_organizations_config</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-github.enterpriseActionsPermissions.EnterpriseActionsPermissions.resetId">reset_id</a></code> | *No description.* |

---

##### `to_string` <a name="to_string" id="@cdktf/provider-github.enterpriseActionsPermissions.EnterpriseActionsPermissions.toString"></a>

```python
def to_string() -> str
```

Returns a string representation of this construct.

##### `add_override` <a name="add_override" id="@cdktf/provider-github.enterpriseActionsPermissions.EnterpriseActionsPermissions.addOverride"></a>

```python
def add_override(
  path: str,
  value: typing.Any
) -> None
```

###### `path`<sup>Required</sup> <a name="path" id="@cdktf/provider-github.enterpriseActionsPermissions.EnterpriseActionsPermissions.addOverride.parameter.path"></a>

- *Type:* str

---

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-github.enterpriseActionsPermissions.EnterpriseActionsPermissions.addOverride.parameter.value"></a>

- *Type:* typing.Any

---

##### `override_logical_id` <a name="override_logical_id" id="@cdktf/provider-github.enterpriseActionsPermissions.EnterpriseActionsPermissions.overrideLogicalId"></a>

```python
def override_logical_id(
  new_logical_id: str
) -> None
```

Overrides the auto-generated logical ID with a specific ID.

###### `new_logical_id`<sup>Required</sup> <a name="new_logical_id" id="@cdktf/provider-github.enterpriseActionsPermissions.EnterpriseActionsPermissions.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* str

The new logical ID to use for this stack element.

---

##### `reset_override_logical_id` <a name="reset_override_logical_id" id="@cdktf/provider-github.enterpriseActionsPermissions.EnterpriseActionsPermissions.resetOverrideLogicalId"></a>

```python
def reset_override_logical_id() -> None
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `to_hcl_terraform` <a name="to_hcl_terraform" id="@cdktf/provider-github.enterpriseActionsPermissions.EnterpriseActionsPermissions.toHclTerraform"></a>

```python
def to_hcl_terraform() -> typing.Any
```

##### `to_metadata` <a name="to_metadata" id="@cdktf/provider-github.enterpriseActionsPermissions.EnterpriseActionsPermissions.toMetadata"></a>

```python
def to_metadata() -> typing.Any
```

##### `to_terraform` <a name="to_terraform" id="@cdktf/provider-github.enterpriseActionsPermissions.EnterpriseActionsPermissions.toTerraform"></a>

```python
def to_terraform() -> typing.Any
```

Adds this resource to the terraform JSON output.

##### `add_move_target` <a name="add_move_target" id="@cdktf/provider-github.enterpriseActionsPermissions.EnterpriseActionsPermissions.addMoveTarget"></a>

```python
def add_move_target(
  move_target: str
) -> None
```

Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move.

###### `move_target`<sup>Required</sup> <a name="move_target" id="@cdktf/provider-github.enterpriseActionsPermissions.EnterpriseActionsPermissions.addMoveTarget.parameter.moveTarget"></a>

- *Type:* str

The string move target that will correspond to this resource.

---

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktf/provider-github.enterpriseActionsPermissions.EnterpriseActionsPermissions.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-github.enterpriseActionsPermissions.EnterpriseActionsPermissions.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktf/provider-github.enterpriseActionsPermissions.EnterpriseActionsPermissions.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-github.enterpriseActionsPermissions.EnterpriseActionsPermissions.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktf/provider-github.enterpriseActionsPermissions.EnterpriseActionsPermissions.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-github.enterpriseActionsPermissions.EnterpriseActionsPermissions.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktf/provider-github.enterpriseActionsPermissions.EnterpriseActionsPermissions.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-github.enterpriseActionsPermissions.EnterpriseActionsPermissions.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktf/provider-github.enterpriseActionsPermissions.EnterpriseActionsPermissions.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-github.enterpriseActionsPermissions.EnterpriseActionsPermissions.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktf/provider-github.enterpriseActionsPermissions.EnterpriseActionsPermissions.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-github.enterpriseActionsPermissions.EnterpriseActionsPermissions.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktf/provider-github.enterpriseActionsPermissions.EnterpriseActionsPermissions.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-github.enterpriseActionsPermissions.EnterpriseActionsPermissions.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktf/provider-github.enterpriseActionsPermissions.EnterpriseActionsPermissions.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-github.enterpriseActionsPermissions.EnterpriseActionsPermissions.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktf/provider-github.enterpriseActionsPermissions.EnterpriseActionsPermissions.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-github.enterpriseActionsPermissions.EnterpriseActionsPermissions.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `has_resource_move` <a name="has_resource_move" id="@cdktf/provider-github.enterpriseActionsPermissions.EnterpriseActionsPermissions.hasResourceMove"></a>

```python
def has_resource_move() -> TerraformResourceMoveByTarget | TerraformResourceMoveById
```

##### `import_from` <a name="import_from" id="@cdktf/provider-github.enterpriseActionsPermissions.EnterpriseActionsPermissions.importFrom"></a>

```python
def import_from(
  id: str,
  provider: TerraformProvider = None
) -> None
```

###### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-github.enterpriseActionsPermissions.EnterpriseActionsPermissions.importFrom.parameter.id"></a>

- *Type:* str

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-github.enterpriseActionsPermissions.EnterpriseActionsPermissions.importFrom.parameter.provider"></a>

- *Type:* cdktf.TerraformProvider

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktf/provider-github.enterpriseActionsPermissions.EnterpriseActionsPermissions.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-github.enterpriseActionsPermissions.EnterpriseActionsPermissions.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `move_from_id` <a name="move_from_id" id="@cdktf/provider-github.enterpriseActionsPermissions.EnterpriseActionsPermissions.moveFromId"></a>

```python
def move_from_id(
  id: str
) -> None
```

Move the resource corresponding to "id" to this resource.

Note that the resource being moved from must be marked as moved using it's instance function.

###### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-github.enterpriseActionsPermissions.EnterpriseActionsPermissions.moveFromId.parameter.id"></a>

- *Type:* str

Full id of resource being moved from, e.g. "aws_s3_bucket.example".

---

##### `move_to` <a name="move_to" id="@cdktf/provider-github.enterpriseActionsPermissions.EnterpriseActionsPermissions.moveTo"></a>

```python
def move_to(
  move_target: str,
  index: str | typing.Union[int, float] = None
) -> None
```

Moves this resource to the target resource given by moveTarget.

###### `move_target`<sup>Required</sup> <a name="move_target" id="@cdktf/provider-github.enterpriseActionsPermissions.EnterpriseActionsPermissions.moveTo.parameter.moveTarget"></a>

- *Type:* str

The previously set user defined string set by .addMoveTarget() corresponding to the resource to move to.

---

###### `index`<sup>Optional</sup> <a name="index" id="@cdktf/provider-github.enterpriseActionsPermissions.EnterpriseActionsPermissions.moveTo.parameter.index"></a>

- *Type:* str | typing.Union[int, float]

Optional The index corresponding to the key the resource is to appear in the foreach of a resource to move to.

---

##### `move_to_id` <a name="move_to_id" id="@cdktf/provider-github.enterpriseActionsPermissions.EnterpriseActionsPermissions.moveToId"></a>

```python
def move_to_id(
  id: str
) -> None
```

Moves this resource to the resource corresponding to "id".

###### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-github.enterpriseActionsPermissions.EnterpriseActionsPermissions.moveToId.parameter.id"></a>

- *Type:* str

Full id of resource to move to, e.g. "aws_s3_bucket.example".

---

##### `put_allowed_actions_config` <a name="put_allowed_actions_config" id="@cdktf/provider-github.enterpriseActionsPermissions.EnterpriseActionsPermissions.putAllowedActionsConfig"></a>

```python
def put_allowed_actions_config(
  github_owned_allowed: bool | IResolvable,
  patterns_allowed: typing.List[str] = None,
  verified_allowed: bool | IResolvable = None
) -> None
```

###### `github_owned_allowed`<sup>Required</sup> <a name="github_owned_allowed" id="@cdktf/provider-github.enterpriseActionsPermissions.EnterpriseActionsPermissions.putAllowedActionsConfig.parameter.githubOwnedAllowed"></a>

- *Type:* bool | cdktf.IResolvable

Whether GitHub-owned actions are allowed in the enterprise.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/integrations/github/6.6.0/docs/resources/enterprise_actions_permissions#github_owned_allowed EnterpriseActionsPermissions#github_owned_allowed}

---

###### `patterns_allowed`<sup>Optional</sup> <a name="patterns_allowed" id="@cdktf/provider-github.enterpriseActionsPermissions.EnterpriseActionsPermissions.putAllowedActionsConfig.parameter.patternsAllowed"></a>

- *Type:* typing.List[str]

Specifies a list of string-matching patterns to allow specific action(s).

Wildcards, tags, and SHAs are allowed. For example, 'monalisa/octocat@', 'monalisa/octocat@v2', 'monalisa/'.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/integrations/github/6.6.0/docs/resources/enterprise_actions_permissions#patterns_allowed EnterpriseActionsPermissions#patterns_allowed}

---

###### `verified_allowed`<sup>Optional</sup> <a name="verified_allowed" id="@cdktf/provider-github.enterpriseActionsPermissions.EnterpriseActionsPermissions.putAllowedActionsConfig.parameter.verifiedAllowed"></a>

- *Type:* bool | cdktf.IResolvable

Whether actions in GitHub Marketplace from verified creators are allowed.

Set to 'true' to allow all GitHub Marketplace actions by verified creators.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/integrations/github/6.6.0/docs/resources/enterprise_actions_permissions#verified_allowed EnterpriseActionsPermissions#verified_allowed}

---

##### `put_enabled_organizations_config` <a name="put_enabled_organizations_config" id="@cdktf/provider-github.enterpriseActionsPermissions.EnterpriseActionsPermissions.putEnabledOrganizationsConfig"></a>

```python
def put_enabled_organizations_config(
  organization_ids: typing.List[typing.Union[int, float]]
) -> None
```

###### `organization_ids`<sup>Required</sup> <a name="organization_ids" id="@cdktf/provider-github.enterpriseActionsPermissions.EnterpriseActionsPermissions.putEnabledOrganizationsConfig.parameter.organizationIds"></a>

- *Type:* typing.List[typing.Union[int, float]]

List of organization IDs to enable for GitHub Actions.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/integrations/github/6.6.0/docs/resources/enterprise_actions_permissions#organization_ids EnterpriseActionsPermissions#organization_ids}

---

##### `reset_allowed_actions` <a name="reset_allowed_actions" id="@cdktf/provider-github.enterpriseActionsPermissions.EnterpriseActionsPermissions.resetAllowedActions"></a>

```python
def reset_allowed_actions() -> None
```

##### `reset_allowed_actions_config` <a name="reset_allowed_actions_config" id="@cdktf/provider-github.enterpriseActionsPermissions.EnterpriseActionsPermissions.resetAllowedActionsConfig"></a>

```python
def reset_allowed_actions_config() -> None
```

##### `reset_enabled_organizations_config` <a name="reset_enabled_organizations_config" id="@cdktf/provider-github.enterpriseActionsPermissions.EnterpriseActionsPermissions.resetEnabledOrganizationsConfig"></a>

```python
def reset_enabled_organizations_config() -> None
```

##### `reset_id` <a name="reset_id" id="@cdktf/provider-github.enterpriseActionsPermissions.EnterpriseActionsPermissions.resetId"></a>

```python
def reset_id() -> None
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-github.enterpriseActionsPermissions.EnterpriseActionsPermissions.isConstruct">is_construct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktf/provider-github.enterpriseActionsPermissions.EnterpriseActionsPermissions.isTerraformElement">is_terraform_element</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-github.enterpriseActionsPermissions.EnterpriseActionsPermissions.isTerraformResource">is_terraform_resource</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-github.enterpriseActionsPermissions.EnterpriseActionsPermissions.generateConfigForImport">generate_config_for_import</a></code> | Generates CDKTF code for importing a EnterpriseActionsPermissions resource upon running "cdktf plan <stack-name>". |

---

##### `is_construct` <a name="is_construct" id="@cdktf/provider-github.enterpriseActionsPermissions.EnterpriseActionsPermissions.isConstruct"></a>

```python
from cdktf_cdktf_provider_github import enterprise_actions_permissions

enterpriseActionsPermissions.EnterpriseActionsPermissions.is_construct(
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

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-github.enterpriseActionsPermissions.EnterpriseActionsPermissions.isConstruct.parameter.x"></a>

- *Type:* typing.Any

Any object.

---

##### `is_terraform_element` <a name="is_terraform_element" id="@cdktf/provider-github.enterpriseActionsPermissions.EnterpriseActionsPermissions.isTerraformElement"></a>

```python
from cdktf_cdktf_provider_github import enterprise_actions_permissions

enterpriseActionsPermissions.EnterpriseActionsPermissions.is_terraform_element(
  x: typing.Any
)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-github.enterpriseActionsPermissions.EnterpriseActionsPermissions.isTerraformElement.parameter.x"></a>

- *Type:* typing.Any

---

##### `is_terraform_resource` <a name="is_terraform_resource" id="@cdktf/provider-github.enterpriseActionsPermissions.EnterpriseActionsPermissions.isTerraformResource"></a>

```python
from cdktf_cdktf_provider_github import enterprise_actions_permissions

enterpriseActionsPermissions.EnterpriseActionsPermissions.is_terraform_resource(
  x: typing.Any
)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-github.enterpriseActionsPermissions.EnterpriseActionsPermissions.isTerraformResource.parameter.x"></a>

- *Type:* typing.Any

---

##### `generate_config_for_import` <a name="generate_config_for_import" id="@cdktf/provider-github.enterpriseActionsPermissions.EnterpriseActionsPermissions.generateConfigForImport"></a>

```python
from cdktf_cdktf_provider_github import enterprise_actions_permissions

enterpriseActionsPermissions.EnterpriseActionsPermissions.generate_config_for_import(
  scope: Construct,
  import_to_id: str,
  import_from_id: str,
  provider: TerraformProvider = None
)
```

Generates CDKTF code for importing a EnterpriseActionsPermissions resource upon running "cdktf plan <stack-name>".

###### `scope`<sup>Required</sup> <a name="scope" id="@cdktf/provider-github.enterpriseActionsPermissions.EnterpriseActionsPermissions.generateConfigForImport.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

###### `import_to_id`<sup>Required</sup> <a name="import_to_id" id="@cdktf/provider-github.enterpriseActionsPermissions.EnterpriseActionsPermissions.generateConfigForImport.parameter.importToId"></a>

- *Type:* str

The construct id used in the generated config for the EnterpriseActionsPermissions to import.

---

###### `import_from_id`<sup>Required</sup> <a name="import_from_id" id="@cdktf/provider-github.enterpriseActionsPermissions.EnterpriseActionsPermissions.generateConfigForImport.parameter.importFromId"></a>

- *Type:* str

The id of the existing EnterpriseActionsPermissions that should be imported.

Refer to the {@link https://registry.terraform.io/providers/integrations/github/6.6.0/docs/resources/enterprise_actions_permissions#import import section} in the documentation of this resource for the id to use

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-github.enterpriseActionsPermissions.EnterpriseActionsPermissions.generateConfigForImport.parameter.provider"></a>

- *Type:* cdktf.TerraformProvider

? Optional instance of the provider where the EnterpriseActionsPermissions to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-github.enterpriseActionsPermissions.EnterpriseActionsPermissions.property.node">node</a></code> | <code>constructs.Node</code> | The tree node. |
| <code><a href="#@cdktf/provider-github.enterpriseActionsPermissions.EnterpriseActionsPermissions.property.cdktfStack">cdktf_stack</a></code> | <code>cdktf.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktf/provider-github.enterpriseActionsPermissions.EnterpriseActionsPermissions.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-github.enterpriseActionsPermissions.EnterpriseActionsPermissions.property.friendlyUniqueId">friendly_unique_id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-github.enterpriseActionsPermissions.EnterpriseActionsPermissions.property.terraformMetaArguments">terraform_meta_arguments</a></code> | <code>typing.Mapping[typing.Any]</code> | *No description.* |
| <code><a href="#@cdktf/provider-github.enterpriseActionsPermissions.EnterpriseActionsPermissions.property.terraformResourceType">terraform_resource_type</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-github.enterpriseActionsPermissions.EnterpriseActionsPermissions.property.terraformGeneratorMetadata">terraform_generator_metadata</a></code> | <code>cdktf.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktf/provider-github.enterpriseActionsPermissions.EnterpriseActionsPermissions.property.connection">connection</a></code> | <code>cdktf.SSHProvisionerConnection \| cdktf.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktf/provider-github.enterpriseActionsPermissions.EnterpriseActionsPermissions.property.count">count</a></code> | <code>typing.Union[int, float] \| cdktf.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktf/provider-github.enterpriseActionsPermissions.EnterpriseActionsPermissions.property.dependsOn">depends_on</a></code> | <code>typing.List[str]</code> | *No description.* |
| <code><a href="#@cdktf/provider-github.enterpriseActionsPermissions.EnterpriseActionsPermissions.property.forEach">for_each</a></code> | <code>cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-github.enterpriseActionsPermissions.EnterpriseActionsPermissions.property.lifecycle">lifecycle</a></code> | <code>cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-github.enterpriseActionsPermissions.EnterpriseActionsPermissions.property.provider">provider</a></code> | <code>cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-github.enterpriseActionsPermissions.EnterpriseActionsPermissions.property.provisioners">provisioners</a></code> | <code>typing.List[cdktf.FileProvisioner \| cdktf.LocalExecProvisioner \| cdktf.RemoteExecProvisioner]</code> | *No description.* |
| <code><a href="#@cdktf/provider-github.enterpriseActionsPermissions.EnterpriseActionsPermissions.property.allowedActionsConfig">allowed_actions_config</a></code> | <code><a href="#@cdktf/provider-github.enterpriseActionsPermissions.EnterpriseActionsPermissionsAllowedActionsConfigOutputReference">EnterpriseActionsPermissionsAllowedActionsConfigOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-github.enterpriseActionsPermissions.EnterpriseActionsPermissions.property.enabledOrganizationsConfig">enabled_organizations_config</a></code> | <code><a href="#@cdktf/provider-github.enterpriseActionsPermissions.EnterpriseActionsPermissionsEnabledOrganizationsConfigOutputReference">EnterpriseActionsPermissionsEnabledOrganizationsConfigOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-github.enterpriseActionsPermissions.EnterpriseActionsPermissions.property.allowedActionsConfigInput">allowed_actions_config_input</a></code> | <code><a href="#@cdktf/provider-github.enterpriseActionsPermissions.EnterpriseActionsPermissionsAllowedActionsConfig">EnterpriseActionsPermissionsAllowedActionsConfig</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-github.enterpriseActionsPermissions.EnterpriseActionsPermissions.property.allowedActionsInput">allowed_actions_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-github.enterpriseActionsPermissions.EnterpriseActionsPermissions.property.enabledOrganizationsConfigInput">enabled_organizations_config_input</a></code> | <code><a href="#@cdktf/provider-github.enterpriseActionsPermissions.EnterpriseActionsPermissionsEnabledOrganizationsConfig">EnterpriseActionsPermissionsEnabledOrganizationsConfig</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-github.enterpriseActionsPermissions.EnterpriseActionsPermissions.property.enabledOrganizationsInput">enabled_organizations_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-github.enterpriseActionsPermissions.EnterpriseActionsPermissions.property.enterpriseSlugInput">enterprise_slug_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-github.enterpriseActionsPermissions.EnterpriseActionsPermissions.property.idInput">id_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-github.enterpriseActionsPermissions.EnterpriseActionsPermissions.property.allowedActions">allowed_actions</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-github.enterpriseActionsPermissions.EnterpriseActionsPermissions.property.enabledOrganizations">enabled_organizations</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-github.enterpriseActionsPermissions.EnterpriseActionsPermissions.property.enterpriseSlug">enterprise_slug</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-github.enterpriseActionsPermissions.EnterpriseActionsPermissions.property.id">id</a></code> | <code>str</code> | *No description.* |

---

##### `node`<sup>Required</sup> <a name="node" id="@cdktf/provider-github.enterpriseActionsPermissions.EnterpriseActionsPermissions.property.node"></a>

```python
node: Node
```

- *Type:* constructs.Node

The tree node.

---

##### `cdktf_stack`<sup>Required</sup> <a name="cdktf_stack" id="@cdktf/provider-github.enterpriseActionsPermissions.EnterpriseActionsPermissions.property.cdktfStack"></a>

```python
cdktf_stack: TerraformStack
```

- *Type:* cdktf.TerraformStack

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-github.enterpriseActionsPermissions.EnterpriseActionsPermissions.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `friendly_unique_id`<sup>Required</sup> <a name="friendly_unique_id" id="@cdktf/provider-github.enterpriseActionsPermissions.EnterpriseActionsPermissions.property.friendlyUniqueId"></a>

```python
friendly_unique_id: str
```

- *Type:* str

---

##### `terraform_meta_arguments`<sup>Required</sup> <a name="terraform_meta_arguments" id="@cdktf/provider-github.enterpriseActionsPermissions.EnterpriseActionsPermissions.property.terraformMetaArguments"></a>

```python
terraform_meta_arguments: typing.Mapping[typing.Any]
```

- *Type:* typing.Mapping[typing.Any]

---

##### `terraform_resource_type`<sup>Required</sup> <a name="terraform_resource_type" id="@cdktf/provider-github.enterpriseActionsPermissions.EnterpriseActionsPermissions.property.terraformResourceType"></a>

```python
terraform_resource_type: str
```

- *Type:* str

---

##### `terraform_generator_metadata`<sup>Optional</sup> <a name="terraform_generator_metadata" id="@cdktf/provider-github.enterpriseActionsPermissions.EnterpriseActionsPermissions.property.terraformGeneratorMetadata"></a>

```python
terraform_generator_metadata: TerraformProviderGeneratorMetadata
```

- *Type:* cdktf.TerraformProviderGeneratorMetadata

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktf/provider-github.enterpriseActionsPermissions.EnterpriseActionsPermissions.property.connection"></a>

```python
connection: SSHProvisionerConnection | WinrmProvisionerConnection
```

- *Type:* cdktf.SSHProvisionerConnection | cdktf.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-github.enterpriseActionsPermissions.EnterpriseActionsPermissions.property.count"></a>

```python
count: typing.Union[int, float] | TerraformCount
```

- *Type:* typing.Union[int, float] | cdktf.TerraformCount

---

##### `depends_on`<sup>Optional</sup> <a name="depends_on" id="@cdktf/provider-github.enterpriseActionsPermissions.EnterpriseActionsPermissions.property.dependsOn"></a>

```python
depends_on: typing.List[str]
```

- *Type:* typing.List[str]

---

##### `for_each`<sup>Optional</sup> <a name="for_each" id="@cdktf/provider-github.enterpriseActionsPermissions.EnterpriseActionsPermissions.property.forEach"></a>

```python
for_each: ITerraformIterator
```

- *Type:* cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-github.enterpriseActionsPermissions.EnterpriseActionsPermissions.property.lifecycle"></a>

```python
lifecycle: TerraformResourceLifecycle
```

- *Type:* cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-github.enterpriseActionsPermissions.EnterpriseActionsPermissions.property.provider"></a>

```python
provider: TerraformProvider
```

- *Type:* cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktf/provider-github.enterpriseActionsPermissions.EnterpriseActionsPermissions.property.provisioners"></a>

```python
provisioners: typing.List[FileProvisioner | LocalExecProvisioner | RemoteExecProvisioner]
```

- *Type:* typing.List[cdktf.FileProvisioner | cdktf.LocalExecProvisioner | cdktf.RemoteExecProvisioner]

---

##### `allowed_actions_config`<sup>Required</sup> <a name="allowed_actions_config" id="@cdktf/provider-github.enterpriseActionsPermissions.EnterpriseActionsPermissions.property.allowedActionsConfig"></a>

```python
allowed_actions_config: EnterpriseActionsPermissionsAllowedActionsConfigOutputReference
```

- *Type:* <a href="#@cdktf/provider-github.enterpriseActionsPermissions.EnterpriseActionsPermissionsAllowedActionsConfigOutputReference">EnterpriseActionsPermissionsAllowedActionsConfigOutputReference</a>

---

##### `enabled_organizations_config`<sup>Required</sup> <a name="enabled_organizations_config" id="@cdktf/provider-github.enterpriseActionsPermissions.EnterpriseActionsPermissions.property.enabledOrganizationsConfig"></a>

```python
enabled_organizations_config: EnterpriseActionsPermissionsEnabledOrganizationsConfigOutputReference
```

- *Type:* <a href="#@cdktf/provider-github.enterpriseActionsPermissions.EnterpriseActionsPermissionsEnabledOrganizationsConfigOutputReference">EnterpriseActionsPermissionsEnabledOrganizationsConfigOutputReference</a>

---

##### `allowed_actions_config_input`<sup>Optional</sup> <a name="allowed_actions_config_input" id="@cdktf/provider-github.enterpriseActionsPermissions.EnterpriseActionsPermissions.property.allowedActionsConfigInput"></a>

```python
allowed_actions_config_input: EnterpriseActionsPermissionsAllowedActionsConfig
```

- *Type:* <a href="#@cdktf/provider-github.enterpriseActionsPermissions.EnterpriseActionsPermissionsAllowedActionsConfig">EnterpriseActionsPermissionsAllowedActionsConfig</a>

---

##### `allowed_actions_input`<sup>Optional</sup> <a name="allowed_actions_input" id="@cdktf/provider-github.enterpriseActionsPermissions.EnterpriseActionsPermissions.property.allowedActionsInput"></a>

```python
allowed_actions_input: str
```

- *Type:* str

---

##### `enabled_organizations_config_input`<sup>Optional</sup> <a name="enabled_organizations_config_input" id="@cdktf/provider-github.enterpriseActionsPermissions.EnterpriseActionsPermissions.property.enabledOrganizationsConfigInput"></a>

```python
enabled_organizations_config_input: EnterpriseActionsPermissionsEnabledOrganizationsConfig
```

- *Type:* <a href="#@cdktf/provider-github.enterpriseActionsPermissions.EnterpriseActionsPermissionsEnabledOrganizationsConfig">EnterpriseActionsPermissionsEnabledOrganizationsConfig</a>

---

##### `enabled_organizations_input`<sup>Optional</sup> <a name="enabled_organizations_input" id="@cdktf/provider-github.enterpriseActionsPermissions.EnterpriseActionsPermissions.property.enabledOrganizationsInput"></a>

```python
enabled_organizations_input: str
```

- *Type:* str

---

##### `enterprise_slug_input`<sup>Optional</sup> <a name="enterprise_slug_input" id="@cdktf/provider-github.enterpriseActionsPermissions.EnterpriseActionsPermissions.property.enterpriseSlugInput"></a>

```python
enterprise_slug_input: str
```

- *Type:* str

---

##### `id_input`<sup>Optional</sup> <a name="id_input" id="@cdktf/provider-github.enterpriseActionsPermissions.EnterpriseActionsPermissions.property.idInput"></a>

```python
id_input: str
```

- *Type:* str

---

##### `allowed_actions`<sup>Required</sup> <a name="allowed_actions" id="@cdktf/provider-github.enterpriseActionsPermissions.EnterpriseActionsPermissions.property.allowedActions"></a>

```python
allowed_actions: str
```

- *Type:* str

---

##### `enabled_organizations`<sup>Required</sup> <a name="enabled_organizations" id="@cdktf/provider-github.enterpriseActionsPermissions.EnterpriseActionsPermissions.property.enabledOrganizations"></a>

```python
enabled_organizations: str
```

- *Type:* str

---

##### `enterprise_slug`<sup>Required</sup> <a name="enterprise_slug" id="@cdktf/provider-github.enterpriseActionsPermissions.EnterpriseActionsPermissions.property.enterpriseSlug"></a>

```python
enterprise_slug: str
```

- *Type:* str

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-github.enterpriseActionsPermissions.EnterpriseActionsPermissions.property.id"></a>

```python
id: str
```

- *Type:* str

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-github.enterpriseActionsPermissions.EnterpriseActionsPermissions.property.tfResourceType">tfResourceType</a></code> | <code>str</code> | *No description.* |

---

##### `tfResourceType`<sup>Required</sup> <a name="tfResourceType" id="@cdktf/provider-github.enterpriseActionsPermissions.EnterpriseActionsPermissions.property.tfResourceType"></a>

```python
tfResourceType: str
```

- *Type:* str

---

## Structs <a name="Structs" id="Structs"></a>

### EnterpriseActionsPermissionsAllowedActionsConfig <a name="EnterpriseActionsPermissionsAllowedActionsConfig" id="@cdktf/provider-github.enterpriseActionsPermissions.EnterpriseActionsPermissionsAllowedActionsConfig"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-github.enterpriseActionsPermissions.EnterpriseActionsPermissionsAllowedActionsConfig.Initializer"></a>

```python
from cdktf_cdktf_provider_github import enterprise_actions_permissions

enterpriseActionsPermissions.EnterpriseActionsPermissionsAllowedActionsConfig(
  github_owned_allowed: bool | IResolvable,
  patterns_allowed: typing.List[str] = None,
  verified_allowed: bool | IResolvable = None
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-github.enterpriseActionsPermissions.EnterpriseActionsPermissionsAllowedActionsConfig.property.githubOwnedAllowed">github_owned_allowed</a></code> | <code>bool \| cdktf.IResolvable</code> | Whether GitHub-owned actions are allowed in the enterprise. |
| <code><a href="#@cdktf/provider-github.enterpriseActionsPermissions.EnterpriseActionsPermissionsAllowedActionsConfig.property.patternsAllowed">patterns_allowed</a></code> | <code>typing.List[str]</code> | Specifies a list of string-matching patterns to allow specific action(s). |
| <code><a href="#@cdktf/provider-github.enterpriseActionsPermissions.EnterpriseActionsPermissionsAllowedActionsConfig.property.verifiedAllowed">verified_allowed</a></code> | <code>bool \| cdktf.IResolvable</code> | Whether actions in GitHub Marketplace from verified creators are allowed. |

---

##### `github_owned_allowed`<sup>Required</sup> <a name="github_owned_allowed" id="@cdktf/provider-github.enterpriseActionsPermissions.EnterpriseActionsPermissionsAllowedActionsConfig.property.githubOwnedAllowed"></a>

```python
github_owned_allowed: bool | IResolvable
```

- *Type:* bool | cdktf.IResolvable

Whether GitHub-owned actions are allowed in the enterprise.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/integrations/github/6.6.0/docs/resources/enterprise_actions_permissions#github_owned_allowed EnterpriseActionsPermissions#github_owned_allowed}

---

##### `patterns_allowed`<sup>Optional</sup> <a name="patterns_allowed" id="@cdktf/provider-github.enterpriseActionsPermissions.EnterpriseActionsPermissionsAllowedActionsConfig.property.patternsAllowed"></a>

```python
patterns_allowed: typing.List[str]
```

- *Type:* typing.List[str]

Specifies a list of string-matching patterns to allow specific action(s).

Wildcards, tags, and SHAs are allowed. For example, 'monalisa/octocat@', 'monalisa/octocat@v2', 'monalisa/'.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/integrations/github/6.6.0/docs/resources/enterprise_actions_permissions#patterns_allowed EnterpriseActionsPermissions#patterns_allowed}

---

##### `verified_allowed`<sup>Optional</sup> <a name="verified_allowed" id="@cdktf/provider-github.enterpriseActionsPermissions.EnterpriseActionsPermissionsAllowedActionsConfig.property.verifiedAllowed"></a>

```python
verified_allowed: bool | IResolvable
```

- *Type:* bool | cdktf.IResolvable

Whether actions in GitHub Marketplace from verified creators are allowed.

Set to 'true' to allow all GitHub Marketplace actions by verified creators.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/integrations/github/6.6.0/docs/resources/enterprise_actions_permissions#verified_allowed EnterpriseActionsPermissions#verified_allowed}

---

### EnterpriseActionsPermissionsConfig <a name="EnterpriseActionsPermissionsConfig" id="@cdktf/provider-github.enterpriseActionsPermissions.EnterpriseActionsPermissionsConfig"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-github.enterpriseActionsPermissions.EnterpriseActionsPermissionsConfig.Initializer"></a>

```python
from cdktf_cdktf_provider_github import enterprise_actions_permissions

enterpriseActionsPermissions.EnterpriseActionsPermissionsConfig(
  connection: SSHProvisionerConnection | WinrmProvisionerConnection = None,
  count: typing.Union[int, float] | TerraformCount = None,
  depends_on: typing.List[ITerraformDependable] = None,
  for_each: ITerraformIterator = None,
  lifecycle: TerraformResourceLifecycle = None,
  provider: TerraformProvider = None,
  provisioners: typing.List[FileProvisioner | LocalExecProvisioner | RemoteExecProvisioner] = None,
  enabled_organizations: str,
  enterprise_slug: str,
  allowed_actions: str = None,
  allowed_actions_config: EnterpriseActionsPermissionsAllowedActionsConfig = None,
  enabled_organizations_config: EnterpriseActionsPermissionsEnabledOrganizationsConfig = None,
  id: str = None
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-github.enterpriseActionsPermissions.EnterpriseActionsPermissionsConfig.property.connection">connection</a></code> | <code>cdktf.SSHProvisionerConnection \| cdktf.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktf/provider-github.enterpriseActionsPermissions.EnterpriseActionsPermissionsConfig.property.count">count</a></code> | <code>typing.Union[int, float] \| cdktf.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktf/provider-github.enterpriseActionsPermissions.EnterpriseActionsPermissionsConfig.property.dependsOn">depends_on</a></code> | <code>typing.List[cdktf.ITerraformDependable]</code> | *No description.* |
| <code><a href="#@cdktf/provider-github.enterpriseActionsPermissions.EnterpriseActionsPermissionsConfig.property.forEach">for_each</a></code> | <code>cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-github.enterpriseActionsPermissions.EnterpriseActionsPermissionsConfig.property.lifecycle">lifecycle</a></code> | <code>cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-github.enterpriseActionsPermissions.EnterpriseActionsPermissionsConfig.property.provider">provider</a></code> | <code>cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-github.enterpriseActionsPermissions.EnterpriseActionsPermissionsConfig.property.provisioners">provisioners</a></code> | <code>typing.List[cdktf.FileProvisioner \| cdktf.LocalExecProvisioner \| cdktf.RemoteExecProvisioner]</code> | *No description.* |
| <code><a href="#@cdktf/provider-github.enterpriseActionsPermissions.EnterpriseActionsPermissionsConfig.property.enabledOrganizations">enabled_organizations</a></code> | <code>str</code> | The policy that controls the organizations in the enterprise that are allowed to run GitHub Actions. |
| <code><a href="#@cdktf/provider-github.enterpriseActionsPermissions.EnterpriseActionsPermissionsConfig.property.enterpriseSlug">enterprise_slug</a></code> | <code>str</code> | The slug of the enterprise. |
| <code><a href="#@cdktf/provider-github.enterpriseActionsPermissions.EnterpriseActionsPermissionsConfig.property.allowedActions">allowed_actions</a></code> | <code>str</code> | The permissions policy that controls the actions that are allowed to run. |
| <code><a href="#@cdktf/provider-github.enterpriseActionsPermissions.EnterpriseActionsPermissionsConfig.property.allowedActionsConfig">allowed_actions_config</a></code> | <code><a href="#@cdktf/provider-github.enterpriseActionsPermissions.EnterpriseActionsPermissionsAllowedActionsConfig">EnterpriseActionsPermissionsAllowedActionsConfig</a></code> | allowed_actions_config block. |
| <code><a href="#@cdktf/provider-github.enterpriseActionsPermissions.EnterpriseActionsPermissionsConfig.property.enabledOrganizationsConfig">enabled_organizations_config</a></code> | <code><a href="#@cdktf/provider-github.enterpriseActionsPermissions.EnterpriseActionsPermissionsEnabledOrganizationsConfig">EnterpriseActionsPermissionsEnabledOrganizationsConfig</a></code> | enabled_organizations_config block. |
| <code><a href="#@cdktf/provider-github.enterpriseActionsPermissions.EnterpriseActionsPermissionsConfig.property.id">id</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/integrations/github/6.6.0/docs/resources/enterprise_actions_permissions#id EnterpriseActionsPermissions#id}. |

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktf/provider-github.enterpriseActionsPermissions.EnterpriseActionsPermissionsConfig.property.connection"></a>

```python
connection: SSHProvisionerConnection | WinrmProvisionerConnection
```

- *Type:* cdktf.SSHProvisionerConnection | cdktf.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-github.enterpriseActionsPermissions.EnterpriseActionsPermissionsConfig.property.count"></a>

```python
count: typing.Union[int, float] | TerraformCount
```

- *Type:* typing.Union[int, float] | cdktf.TerraformCount

---

##### `depends_on`<sup>Optional</sup> <a name="depends_on" id="@cdktf/provider-github.enterpriseActionsPermissions.EnterpriseActionsPermissionsConfig.property.dependsOn"></a>

```python
depends_on: typing.List[ITerraformDependable]
```

- *Type:* typing.List[cdktf.ITerraformDependable]

---

##### `for_each`<sup>Optional</sup> <a name="for_each" id="@cdktf/provider-github.enterpriseActionsPermissions.EnterpriseActionsPermissionsConfig.property.forEach"></a>

```python
for_each: ITerraformIterator
```

- *Type:* cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-github.enterpriseActionsPermissions.EnterpriseActionsPermissionsConfig.property.lifecycle"></a>

```python
lifecycle: TerraformResourceLifecycle
```

- *Type:* cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-github.enterpriseActionsPermissions.EnterpriseActionsPermissionsConfig.property.provider"></a>

```python
provider: TerraformProvider
```

- *Type:* cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktf/provider-github.enterpriseActionsPermissions.EnterpriseActionsPermissionsConfig.property.provisioners"></a>

```python
provisioners: typing.List[FileProvisioner | LocalExecProvisioner | RemoteExecProvisioner]
```

- *Type:* typing.List[cdktf.FileProvisioner | cdktf.LocalExecProvisioner | cdktf.RemoteExecProvisioner]

---

##### `enabled_organizations`<sup>Required</sup> <a name="enabled_organizations" id="@cdktf/provider-github.enterpriseActionsPermissions.EnterpriseActionsPermissionsConfig.property.enabledOrganizations"></a>

```python
enabled_organizations: str
```

- *Type:* str

The policy that controls the organizations in the enterprise that are allowed to run GitHub Actions.

Can be one of: 'all', 'none', or 'selected'.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/integrations/github/6.6.0/docs/resources/enterprise_actions_permissions#enabled_organizations EnterpriseActionsPermissions#enabled_organizations}

---

##### `enterprise_slug`<sup>Required</sup> <a name="enterprise_slug" id="@cdktf/provider-github.enterpriseActionsPermissions.EnterpriseActionsPermissionsConfig.property.enterpriseSlug"></a>

```python
enterprise_slug: str
```

- *Type:* str

The slug of the enterprise.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/integrations/github/6.6.0/docs/resources/enterprise_actions_permissions#enterprise_slug EnterpriseActionsPermissions#enterprise_slug}

---

##### `allowed_actions`<sup>Optional</sup> <a name="allowed_actions" id="@cdktf/provider-github.enterpriseActionsPermissions.EnterpriseActionsPermissionsConfig.property.allowedActions"></a>

```python
allowed_actions: str
```

- *Type:* str

The permissions policy that controls the actions that are allowed to run.

Can be one of: 'all', 'local_only', or 'selected'.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/integrations/github/6.6.0/docs/resources/enterprise_actions_permissions#allowed_actions EnterpriseActionsPermissions#allowed_actions}

---

##### `allowed_actions_config`<sup>Optional</sup> <a name="allowed_actions_config" id="@cdktf/provider-github.enterpriseActionsPermissions.EnterpriseActionsPermissionsConfig.property.allowedActionsConfig"></a>

```python
allowed_actions_config: EnterpriseActionsPermissionsAllowedActionsConfig
```

- *Type:* <a href="#@cdktf/provider-github.enterpriseActionsPermissions.EnterpriseActionsPermissionsAllowedActionsConfig">EnterpriseActionsPermissionsAllowedActionsConfig</a>

allowed_actions_config block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/integrations/github/6.6.0/docs/resources/enterprise_actions_permissions#allowed_actions_config EnterpriseActionsPermissions#allowed_actions_config}

---

##### `enabled_organizations_config`<sup>Optional</sup> <a name="enabled_organizations_config" id="@cdktf/provider-github.enterpriseActionsPermissions.EnterpriseActionsPermissionsConfig.property.enabledOrganizationsConfig"></a>

```python
enabled_organizations_config: EnterpriseActionsPermissionsEnabledOrganizationsConfig
```

- *Type:* <a href="#@cdktf/provider-github.enterpriseActionsPermissions.EnterpriseActionsPermissionsEnabledOrganizationsConfig">EnterpriseActionsPermissionsEnabledOrganizationsConfig</a>

enabled_organizations_config block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/integrations/github/6.6.0/docs/resources/enterprise_actions_permissions#enabled_organizations_config EnterpriseActionsPermissions#enabled_organizations_config}

---

##### `id`<sup>Optional</sup> <a name="id" id="@cdktf/provider-github.enterpriseActionsPermissions.EnterpriseActionsPermissionsConfig.property.id"></a>

```python
id: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/integrations/github/6.6.0/docs/resources/enterprise_actions_permissions#id EnterpriseActionsPermissions#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

### EnterpriseActionsPermissionsEnabledOrganizationsConfig <a name="EnterpriseActionsPermissionsEnabledOrganizationsConfig" id="@cdktf/provider-github.enterpriseActionsPermissions.EnterpriseActionsPermissionsEnabledOrganizationsConfig"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-github.enterpriseActionsPermissions.EnterpriseActionsPermissionsEnabledOrganizationsConfig.Initializer"></a>

```python
from cdktf_cdktf_provider_github import enterprise_actions_permissions

enterpriseActionsPermissions.EnterpriseActionsPermissionsEnabledOrganizationsConfig(
  organization_ids: typing.List[typing.Union[int, float]]
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-github.enterpriseActionsPermissions.EnterpriseActionsPermissionsEnabledOrganizationsConfig.property.organizationIds">organization_ids</a></code> | <code>typing.List[typing.Union[int, float]]</code> | List of organization IDs to enable for GitHub Actions. |

---

##### `organization_ids`<sup>Required</sup> <a name="organization_ids" id="@cdktf/provider-github.enterpriseActionsPermissions.EnterpriseActionsPermissionsEnabledOrganizationsConfig.property.organizationIds"></a>

```python
organization_ids: typing.List[typing.Union[int, float]]
```

- *Type:* typing.List[typing.Union[int, float]]

List of organization IDs to enable for GitHub Actions.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/integrations/github/6.6.0/docs/resources/enterprise_actions_permissions#organization_ids EnterpriseActionsPermissions#organization_ids}

---

## Classes <a name="Classes" id="Classes"></a>

### EnterpriseActionsPermissionsAllowedActionsConfigOutputReference <a name="EnterpriseActionsPermissionsAllowedActionsConfigOutputReference" id="@cdktf/provider-github.enterpriseActionsPermissions.EnterpriseActionsPermissionsAllowedActionsConfigOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-github.enterpriseActionsPermissions.EnterpriseActionsPermissionsAllowedActionsConfigOutputReference.Initializer"></a>

```python
from cdktf_cdktf_provider_github import enterprise_actions_permissions

enterpriseActionsPermissions.EnterpriseActionsPermissionsAllowedActionsConfigOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-github.enterpriseActionsPermissions.EnterpriseActionsPermissionsAllowedActionsConfigOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-github.enterpriseActionsPermissions.EnterpriseActionsPermissionsAllowedActionsConfigOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktf/provider-github.enterpriseActionsPermissions.EnterpriseActionsPermissionsAllowedActionsConfigOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-github.enterpriseActionsPermissions.EnterpriseActionsPermissionsAllowedActionsConfigOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-github.enterpriseActionsPermissions.EnterpriseActionsPermissionsAllowedActionsConfigOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-github.enterpriseActionsPermissions.EnterpriseActionsPermissionsAllowedActionsConfigOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-github.enterpriseActionsPermissions.EnterpriseActionsPermissionsAllowedActionsConfigOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-github.enterpriseActionsPermissions.EnterpriseActionsPermissionsAllowedActionsConfigOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-github.enterpriseActionsPermissions.EnterpriseActionsPermissionsAllowedActionsConfigOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-github.enterpriseActionsPermissions.EnterpriseActionsPermissionsAllowedActionsConfigOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-github.enterpriseActionsPermissions.EnterpriseActionsPermissionsAllowedActionsConfigOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-github.enterpriseActionsPermissions.EnterpriseActionsPermissionsAllowedActionsConfigOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-github.enterpriseActionsPermissions.EnterpriseActionsPermissionsAllowedActionsConfigOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-github.enterpriseActionsPermissions.EnterpriseActionsPermissionsAllowedActionsConfigOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-github.enterpriseActionsPermissions.EnterpriseActionsPermissionsAllowedActionsConfigOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-github.enterpriseActionsPermissions.EnterpriseActionsPermissionsAllowedActionsConfigOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-github.enterpriseActionsPermissions.EnterpriseActionsPermissionsAllowedActionsConfigOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-github.enterpriseActionsPermissions.EnterpriseActionsPermissionsAllowedActionsConfigOutputReference.resetPatternsAllowed">reset_patterns_allowed</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-github.enterpriseActionsPermissions.EnterpriseActionsPermissionsAllowedActionsConfigOutputReference.resetVerifiedAllowed">reset_verified_allowed</a></code> | *No description.* |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktf/provider-github.enterpriseActionsPermissions.EnterpriseActionsPermissionsAllowedActionsConfigOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktf/provider-github.enterpriseActionsPermissions.EnterpriseActionsPermissionsAllowedActionsConfigOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-github.enterpriseActionsPermissions.EnterpriseActionsPermissionsAllowedActionsConfigOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktf/provider-github.enterpriseActionsPermissions.EnterpriseActionsPermissionsAllowedActionsConfigOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-github.enterpriseActionsPermissions.EnterpriseActionsPermissionsAllowedActionsConfigOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktf/provider-github.enterpriseActionsPermissions.EnterpriseActionsPermissionsAllowedActionsConfigOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-github.enterpriseActionsPermissions.EnterpriseActionsPermissionsAllowedActionsConfigOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktf/provider-github.enterpriseActionsPermissions.EnterpriseActionsPermissionsAllowedActionsConfigOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-github.enterpriseActionsPermissions.EnterpriseActionsPermissionsAllowedActionsConfigOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktf/provider-github.enterpriseActionsPermissions.EnterpriseActionsPermissionsAllowedActionsConfigOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-github.enterpriseActionsPermissions.EnterpriseActionsPermissionsAllowedActionsConfigOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktf/provider-github.enterpriseActionsPermissions.EnterpriseActionsPermissionsAllowedActionsConfigOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-github.enterpriseActionsPermissions.EnterpriseActionsPermissionsAllowedActionsConfigOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktf/provider-github.enterpriseActionsPermissions.EnterpriseActionsPermissionsAllowedActionsConfigOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-github.enterpriseActionsPermissions.EnterpriseActionsPermissionsAllowedActionsConfigOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktf/provider-github.enterpriseActionsPermissions.EnterpriseActionsPermissionsAllowedActionsConfigOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-github.enterpriseActionsPermissions.EnterpriseActionsPermissionsAllowedActionsConfigOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktf/provider-github.enterpriseActionsPermissions.EnterpriseActionsPermissionsAllowedActionsConfigOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-github.enterpriseActionsPermissions.EnterpriseActionsPermissionsAllowedActionsConfigOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktf/provider-github.enterpriseActionsPermissions.EnterpriseActionsPermissionsAllowedActionsConfigOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-github.enterpriseActionsPermissions.EnterpriseActionsPermissionsAllowedActionsConfigOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktf/provider-github.enterpriseActionsPermissions.EnterpriseActionsPermissionsAllowedActionsConfigOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-github.enterpriseActionsPermissions.EnterpriseActionsPermissionsAllowedActionsConfigOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktf/provider-github.enterpriseActionsPermissions.EnterpriseActionsPermissionsAllowedActionsConfigOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `reset_patterns_allowed` <a name="reset_patterns_allowed" id="@cdktf/provider-github.enterpriseActionsPermissions.EnterpriseActionsPermissionsAllowedActionsConfigOutputReference.resetPatternsAllowed"></a>

```python
def reset_patterns_allowed() -> None
```

##### `reset_verified_allowed` <a name="reset_verified_allowed" id="@cdktf/provider-github.enterpriseActionsPermissions.EnterpriseActionsPermissionsAllowedActionsConfigOutputReference.resetVerifiedAllowed"></a>

```python
def reset_verified_allowed() -> None
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-github.enterpriseActionsPermissions.EnterpriseActionsPermissionsAllowedActionsConfigOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-github.enterpriseActionsPermissions.EnterpriseActionsPermissionsAllowedActionsConfigOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-github.enterpriseActionsPermissions.EnterpriseActionsPermissionsAllowedActionsConfigOutputReference.property.githubOwnedAllowedInput">github_owned_allowed_input</a></code> | <code>bool \| cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-github.enterpriseActionsPermissions.EnterpriseActionsPermissionsAllowedActionsConfigOutputReference.property.patternsAllowedInput">patterns_allowed_input</a></code> | <code>typing.List[str]</code> | *No description.* |
| <code><a href="#@cdktf/provider-github.enterpriseActionsPermissions.EnterpriseActionsPermissionsAllowedActionsConfigOutputReference.property.verifiedAllowedInput">verified_allowed_input</a></code> | <code>bool \| cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-github.enterpriseActionsPermissions.EnterpriseActionsPermissionsAllowedActionsConfigOutputReference.property.githubOwnedAllowed">github_owned_allowed</a></code> | <code>bool \| cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-github.enterpriseActionsPermissions.EnterpriseActionsPermissionsAllowedActionsConfigOutputReference.property.patternsAllowed">patterns_allowed</a></code> | <code>typing.List[str]</code> | *No description.* |
| <code><a href="#@cdktf/provider-github.enterpriseActionsPermissions.EnterpriseActionsPermissionsAllowedActionsConfigOutputReference.property.verifiedAllowed">verified_allowed</a></code> | <code>bool \| cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-github.enterpriseActionsPermissions.EnterpriseActionsPermissionsAllowedActionsConfigOutputReference.property.internalValue">internal_value</a></code> | <code><a href="#@cdktf/provider-github.enterpriseActionsPermissions.EnterpriseActionsPermissionsAllowedActionsConfig">EnterpriseActionsPermissionsAllowedActionsConfig</a></code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktf/provider-github.enterpriseActionsPermissions.EnterpriseActionsPermissionsAllowedActionsConfigOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-github.enterpriseActionsPermissions.EnterpriseActionsPermissionsAllowedActionsConfigOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `github_owned_allowed_input`<sup>Optional</sup> <a name="github_owned_allowed_input" id="@cdktf/provider-github.enterpriseActionsPermissions.EnterpriseActionsPermissionsAllowedActionsConfigOutputReference.property.githubOwnedAllowedInput"></a>

```python
github_owned_allowed_input: bool | IResolvable
```

- *Type:* bool | cdktf.IResolvable

---

##### `patterns_allowed_input`<sup>Optional</sup> <a name="patterns_allowed_input" id="@cdktf/provider-github.enterpriseActionsPermissions.EnterpriseActionsPermissionsAllowedActionsConfigOutputReference.property.patternsAllowedInput"></a>

```python
patterns_allowed_input: typing.List[str]
```

- *Type:* typing.List[str]

---

##### `verified_allowed_input`<sup>Optional</sup> <a name="verified_allowed_input" id="@cdktf/provider-github.enterpriseActionsPermissions.EnterpriseActionsPermissionsAllowedActionsConfigOutputReference.property.verifiedAllowedInput"></a>

```python
verified_allowed_input: bool | IResolvable
```

- *Type:* bool | cdktf.IResolvable

---

##### `github_owned_allowed`<sup>Required</sup> <a name="github_owned_allowed" id="@cdktf/provider-github.enterpriseActionsPermissions.EnterpriseActionsPermissionsAllowedActionsConfigOutputReference.property.githubOwnedAllowed"></a>

```python
github_owned_allowed: bool | IResolvable
```

- *Type:* bool | cdktf.IResolvable

---

##### `patterns_allowed`<sup>Required</sup> <a name="patterns_allowed" id="@cdktf/provider-github.enterpriseActionsPermissions.EnterpriseActionsPermissionsAllowedActionsConfigOutputReference.property.patternsAllowed"></a>

```python
patterns_allowed: typing.List[str]
```

- *Type:* typing.List[str]

---

##### `verified_allowed`<sup>Required</sup> <a name="verified_allowed" id="@cdktf/provider-github.enterpriseActionsPermissions.EnterpriseActionsPermissionsAllowedActionsConfigOutputReference.property.verifiedAllowed"></a>

```python
verified_allowed: bool | IResolvable
```

- *Type:* bool | cdktf.IResolvable

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktf/provider-github.enterpriseActionsPermissions.EnterpriseActionsPermissionsAllowedActionsConfigOutputReference.property.internalValue"></a>

```python
internal_value: EnterpriseActionsPermissionsAllowedActionsConfig
```

- *Type:* <a href="#@cdktf/provider-github.enterpriseActionsPermissions.EnterpriseActionsPermissionsAllowedActionsConfig">EnterpriseActionsPermissionsAllowedActionsConfig</a>

---


### EnterpriseActionsPermissionsEnabledOrganizationsConfigOutputReference <a name="EnterpriseActionsPermissionsEnabledOrganizationsConfigOutputReference" id="@cdktf/provider-github.enterpriseActionsPermissions.EnterpriseActionsPermissionsEnabledOrganizationsConfigOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-github.enterpriseActionsPermissions.EnterpriseActionsPermissionsEnabledOrganizationsConfigOutputReference.Initializer"></a>

```python
from cdktf_cdktf_provider_github import enterprise_actions_permissions

enterpriseActionsPermissions.EnterpriseActionsPermissionsEnabledOrganizationsConfigOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-github.enterpriseActionsPermissions.EnterpriseActionsPermissionsEnabledOrganizationsConfigOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-github.enterpriseActionsPermissions.EnterpriseActionsPermissionsEnabledOrganizationsConfigOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktf/provider-github.enterpriseActionsPermissions.EnterpriseActionsPermissionsEnabledOrganizationsConfigOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-github.enterpriseActionsPermissions.EnterpriseActionsPermissionsEnabledOrganizationsConfigOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-github.enterpriseActionsPermissions.EnterpriseActionsPermissionsEnabledOrganizationsConfigOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-github.enterpriseActionsPermissions.EnterpriseActionsPermissionsEnabledOrganizationsConfigOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-github.enterpriseActionsPermissions.EnterpriseActionsPermissionsEnabledOrganizationsConfigOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-github.enterpriseActionsPermissions.EnterpriseActionsPermissionsEnabledOrganizationsConfigOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-github.enterpriseActionsPermissions.EnterpriseActionsPermissionsEnabledOrganizationsConfigOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-github.enterpriseActionsPermissions.EnterpriseActionsPermissionsEnabledOrganizationsConfigOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-github.enterpriseActionsPermissions.EnterpriseActionsPermissionsEnabledOrganizationsConfigOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-github.enterpriseActionsPermissions.EnterpriseActionsPermissionsEnabledOrganizationsConfigOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-github.enterpriseActionsPermissions.EnterpriseActionsPermissionsEnabledOrganizationsConfigOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-github.enterpriseActionsPermissions.EnterpriseActionsPermissionsEnabledOrganizationsConfigOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-github.enterpriseActionsPermissions.EnterpriseActionsPermissionsEnabledOrganizationsConfigOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-github.enterpriseActionsPermissions.EnterpriseActionsPermissionsEnabledOrganizationsConfigOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-github.enterpriseActionsPermissions.EnterpriseActionsPermissionsEnabledOrganizationsConfigOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktf/provider-github.enterpriseActionsPermissions.EnterpriseActionsPermissionsEnabledOrganizationsConfigOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktf/provider-github.enterpriseActionsPermissions.EnterpriseActionsPermissionsEnabledOrganizationsConfigOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-github.enterpriseActionsPermissions.EnterpriseActionsPermissionsEnabledOrganizationsConfigOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktf/provider-github.enterpriseActionsPermissions.EnterpriseActionsPermissionsEnabledOrganizationsConfigOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-github.enterpriseActionsPermissions.EnterpriseActionsPermissionsEnabledOrganizationsConfigOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktf/provider-github.enterpriseActionsPermissions.EnterpriseActionsPermissionsEnabledOrganizationsConfigOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-github.enterpriseActionsPermissions.EnterpriseActionsPermissionsEnabledOrganizationsConfigOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktf/provider-github.enterpriseActionsPermissions.EnterpriseActionsPermissionsEnabledOrganizationsConfigOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-github.enterpriseActionsPermissions.EnterpriseActionsPermissionsEnabledOrganizationsConfigOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktf/provider-github.enterpriseActionsPermissions.EnterpriseActionsPermissionsEnabledOrganizationsConfigOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-github.enterpriseActionsPermissions.EnterpriseActionsPermissionsEnabledOrganizationsConfigOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktf/provider-github.enterpriseActionsPermissions.EnterpriseActionsPermissionsEnabledOrganizationsConfigOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-github.enterpriseActionsPermissions.EnterpriseActionsPermissionsEnabledOrganizationsConfigOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktf/provider-github.enterpriseActionsPermissions.EnterpriseActionsPermissionsEnabledOrganizationsConfigOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-github.enterpriseActionsPermissions.EnterpriseActionsPermissionsEnabledOrganizationsConfigOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktf/provider-github.enterpriseActionsPermissions.EnterpriseActionsPermissionsEnabledOrganizationsConfigOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-github.enterpriseActionsPermissions.EnterpriseActionsPermissionsEnabledOrganizationsConfigOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktf/provider-github.enterpriseActionsPermissions.EnterpriseActionsPermissionsEnabledOrganizationsConfigOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-github.enterpriseActionsPermissions.EnterpriseActionsPermissionsEnabledOrganizationsConfigOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktf/provider-github.enterpriseActionsPermissions.EnterpriseActionsPermissionsEnabledOrganizationsConfigOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-github.enterpriseActionsPermissions.EnterpriseActionsPermissionsEnabledOrganizationsConfigOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktf/provider-github.enterpriseActionsPermissions.EnterpriseActionsPermissionsEnabledOrganizationsConfigOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-github.enterpriseActionsPermissions.EnterpriseActionsPermissionsEnabledOrganizationsConfigOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktf/provider-github.enterpriseActionsPermissions.EnterpriseActionsPermissionsEnabledOrganizationsConfigOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-github.enterpriseActionsPermissions.EnterpriseActionsPermissionsEnabledOrganizationsConfigOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-github.enterpriseActionsPermissions.EnterpriseActionsPermissionsEnabledOrganizationsConfigOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-github.enterpriseActionsPermissions.EnterpriseActionsPermissionsEnabledOrganizationsConfigOutputReference.property.organizationIdsInput">organization_ids_input</a></code> | <code>typing.List[typing.Union[int, float]]</code> | *No description.* |
| <code><a href="#@cdktf/provider-github.enterpriseActionsPermissions.EnterpriseActionsPermissionsEnabledOrganizationsConfigOutputReference.property.organizationIds">organization_ids</a></code> | <code>typing.List[typing.Union[int, float]]</code> | *No description.* |
| <code><a href="#@cdktf/provider-github.enterpriseActionsPermissions.EnterpriseActionsPermissionsEnabledOrganizationsConfigOutputReference.property.internalValue">internal_value</a></code> | <code><a href="#@cdktf/provider-github.enterpriseActionsPermissions.EnterpriseActionsPermissionsEnabledOrganizationsConfig">EnterpriseActionsPermissionsEnabledOrganizationsConfig</a></code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktf/provider-github.enterpriseActionsPermissions.EnterpriseActionsPermissionsEnabledOrganizationsConfigOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-github.enterpriseActionsPermissions.EnterpriseActionsPermissionsEnabledOrganizationsConfigOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `organization_ids_input`<sup>Optional</sup> <a name="organization_ids_input" id="@cdktf/provider-github.enterpriseActionsPermissions.EnterpriseActionsPermissionsEnabledOrganizationsConfigOutputReference.property.organizationIdsInput"></a>

```python
organization_ids_input: typing.List[typing.Union[int, float]]
```

- *Type:* typing.List[typing.Union[int, float]]

---

##### `organization_ids`<sup>Required</sup> <a name="organization_ids" id="@cdktf/provider-github.enterpriseActionsPermissions.EnterpriseActionsPermissionsEnabledOrganizationsConfigOutputReference.property.organizationIds"></a>

```python
organization_ids: typing.List[typing.Union[int, float]]
```

- *Type:* typing.List[typing.Union[int, float]]

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktf/provider-github.enterpriseActionsPermissions.EnterpriseActionsPermissionsEnabledOrganizationsConfigOutputReference.property.internalValue"></a>

```python
internal_value: EnterpriseActionsPermissionsEnabledOrganizationsConfig
```

- *Type:* <a href="#@cdktf/provider-github.enterpriseActionsPermissions.EnterpriseActionsPermissionsEnabledOrganizationsConfig">EnterpriseActionsPermissionsEnabledOrganizationsConfig</a>

---



