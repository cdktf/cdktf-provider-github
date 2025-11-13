# `dataGithubOrganizationRoleTeams` Submodule <a name="`dataGithubOrganizationRoleTeams` Submodule" id="@cdktf/provider-github.dataGithubOrganizationRoleTeams"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### DataGithubOrganizationRoleTeams <a name="DataGithubOrganizationRoleTeams" id="@cdktf/provider-github.dataGithubOrganizationRoleTeams.DataGithubOrganizationRoleTeams"></a>

Represents a {@link https://registry.terraform.io/providers/integrations/github/6.8.0/docs/data-sources/organization_role_teams github_organization_role_teams}.

#### Initializers <a name="Initializers" id="@cdktf/provider-github.dataGithubOrganizationRoleTeams.DataGithubOrganizationRoleTeams.Initializer"></a>

```python
from cdktf_cdktf_provider_github import data_github_organization_role_teams

dataGithubOrganizationRoleTeams.DataGithubOrganizationRoleTeams(
  scope: Construct,
  id: str,
  connection: SSHProvisionerConnection | WinrmProvisionerConnection = None,
  count: typing.Union[int, float] | TerraformCount = None,
  depends_on: typing.List[ITerraformDependable] = None,
  for_each: ITerraformIterator = None,
  lifecycle: TerraformResourceLifecycle = None,
  provider: TerraformProvider = None,
  provisioners: typing.List[FileProvisioner | LocalExecProvisioner | RemoteExecProvisioner] = None,
  role_id: typing.Union[int, float],
  id: str = None
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-github.dataGithubOrganizationRoleTeams.DataGithubOrganizationRoleTeams.Initializer.parameter.scope">scope</a></code> | <code>constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktf/provider-github.dataGithubOrganizationRoleTeams.DataGithubOrganizationRoleTeams.Initializer.parameter.id">id</a></code> | <code>str</code> | The scoped construct ID. |
| <code><a href="#@cdktf/provider-github.dataGithubOrganizationRoleTeams.DataGithubOrganizationRoleTeams.Initializer.parameter.connection">connection</a></code> | <code>cdktf.SSHProvisionerConnection \| cdktf.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktf/provider-github.dataGithubOrganizationRoleTeams.DataGithubOrganizationRoleTeams.Initializer.parameter.count">count</a></code> | <code>typing.Union[int, float] \| cdktf.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktf/provider-github.dataGithubOrganizationRoleTeams.DataGithubOrganizationRoleTeams.Initializer.parameter.dependsOn">depends_on</a></code> | <code>typing.List[cdktf.ITerraformDependable]</code> | *No description.* |
| <code><a href="#@cdktf/provider-github.dataGithubOrganizationRoleTeams.DataGithubOrganizationRoleTeams.Initializer.parameter.forEach">for_each</a></code> | <code>cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-github.dataGithubOrganizationRoleTeams.DataGithubOrganizationRoleTeams.Initializer.parameter.lifecycle">lifecycle</a></code> | <code>cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-github.dataGithubOrganizationRoleTeams.DataGithubOrganizationRoleTeams.Initializer.parameter.provider">provider</a></code> | <code>cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-github.dataGithubOrganizationRoleTeams.DataGithubOrganizationRoleTeams.Initializer.parameter.provisioners">provisioners</a></code> | <code>typing.List[cdktf.FileProvisioner \| cdktf.LocalExecProvisioner \| cdktf.RemoteExecProvisioner]</code> | *No description.* |
| <code><a href="#@cdktf/provider-github.dataGithubOrganizationRoleTeams.DataGithubOrganizationRoleTeams.Initializer.parameter.roleId">role_id</a></code> | <code>typing.Union[int, float]</code> | The unique identifier of the organization role. |
| <code><a href="#@cdktf/provider-github.dataGithubOrganizationRoleTeams.DataGithubOrganizationRoleTeams.Initializer.parameter.id">id</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/integrations/github/6.8.0/docs/data-sources/organization_role_teams#id DataGithubOrganizationRoleTeams#id}. |

---

##### `scope`<sup>Required</sup> <a name="scope" id="@cdktf/provider-github.dataGithubOrganizationRoleTeams.DataGithubOrganizationRoleTeams.Initializer.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-github.dataGithubOrganizationRoleTeams.DataGithubOrganizationRoleTeams.Initializer.parameter.id"></a>

- *Type:* str

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktf/provider-github.dataGithubOrganizationRoleTeams.DataGithubOrganizationRoleTeams.Initializer.parameter.connection"></a>

- *Type:* cdktf.SSHProvisionerConnection | cdktf.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-github.dataGithubOrganizationRoleTeams.DataGithubOrganizationRoleTeams.Initializer.parameter.count"></a>

- *Type:* typing.Union[int, float] | cdktf.TerraformCount

---

##### `depends_on`<sup>Optional</sup> <a name="depends_on" id="@cdktf/provider-github.dataGithubOrganizationRoleTeams.DataGithubOrganizationRoleTeams.Initializer.parameter.dependsOn"></a>

- *Type:* typing.List[cdktf.ITerraformDependable]

---

##### `for_each`<sup>Optional</sup> <a name="for_each" id="@cdktf/provider-github.dataGithubOrganizationRoleTeams.DataGithubOrganizationRoleTeams.Initializer.parameter.forEach"></a>

- *Type:* cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-github.dataGithubOrganizationRoleTeams.DataGithubOrganizationRoleTeams.Initializer.parameter.lifecycle"></a>

- *Type:* cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-github.dataGithubOrganizationRoleTeams.DataGithubOrganizationRoleTeams.Initializer.parameter.provider"></a>

- *Type:* cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktf/provider-github.dataGithubOrganizationRoleTeams.DataGithubOrganizationRoleTeams.Initializer.parameter.provisioners"></a>

- *Type:* typing.List[cdktf.FileProvisioner | cdktf.LocalExecProvisioner | cdktf.RemoteExecProvisioner]

---

##### `role_id`<sup>Required</sup> <a name="role_id" id="@cdktf/provider-github.dataGithubOrganizationRoleTeams.DataGithubOrganizationRoleTeams.Initializer.parameter.roleId"></a>

- *Type:* typing.Union[int, float]

The unique identifier of the organization role.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/integrations/github/6.8.0/docs/data-sources/organization_role_teams#role_id DataGithubOrganizationRoleTeams#role_id}

---

##### `id`<sup>Optional</sup> <a name="id" id="@cdktf/provider-github.dataGithubOrganizationRoleTeams.DataGithubOrganizationRoleTeams.Initializer.parameter.id"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/integrations/github/6.8.0/docs/data-sources/organization_role_teams#id DataGithubOrganizationRoleTeams#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-github.dataGithubOrganizationRoleTeams.DataGithubOrganizationRoleTeams.toString">to_string</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktf/provider-github.dataGithubOrganizationRoleTeams.DataGithubOrganizationRoleTeams.addOverride">add_override</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-github.dataGithubOrganizationRoleTeams.DataGithubOrganizationRoleTeams.overrideLogicalId">override_logical_id</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktf/provider-github.dataGithubOrganizationRoleTeams.DataGithubOrganizationRoleTeams.resetOverrideLogicalId">reset_override_logical_id</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktf/provider-github.dataGithubOrganizationRoleTeams.DataGithubOrganizationRoleTeams.toHclTerraform">to_hcl_terraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktf/provider-github.dataGithubOrganizationRoleTeams.DataGithubOrganizationRoleTeams.toMetadata">to_metadata</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-github.dataGithubOrganizationRoleTeams.DataGithubOrganizationRoleTeams.toTerraform">to_terraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktf/provider-github.dataGithubOrganizationRoleTeams.DataGithubOrganizationRoleTeams.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-github.dataGithubOrganizationRoleTeams.DataGithubOrganizationRoleTeams.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-github.dataGithubOrganizationRoleTeams.DataGithubOrganizationRoleTeams.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-github.dataGithubOrganizationRoleTeams.DataGithubOrganizationRoleTeams.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-github.dataGithubOrganizationRoleTeams.DataGithubOrganizationRoleTeams.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-github.dataGithubOrganizationRoleTeams.DataGithubOrganizationRoleTeams.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-github.dataGithubOrganizationRoleTeams.DataGithubOrganizationRoleTeams.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-github.dataGithubOrganizationRoleTeams.DataGithubOrganizationRoleTeams.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-github.dataGithubOrganizationRoleTeams.DataGithubOrganizationRoleTeams.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-github.dataGithubOrganizationRoleTeams.DataGithubOrganizationRoleTeams.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-github.dataGithubOrganizationRoleTeams.DataGithubOrganizationRoleTeams.resetId">reset_id</a></code> | *No description.* |

---

##### `to_string` <a name="to_string" id="@cdktf/provider-github.dataGithubOrganizationRoleTeams.DataGithubOrganizationRoleTeams.toString"></a>

```python
def to_string() -> str
```

Returns a string representation of this construct.

##### `add_override` <a name="add_override" id="@cdktf/provider-github.dataGithubOrganizationRoleTeams.DataGithubOrganizationRoleTeams.addOverride"></a>

```python
def add_override(
  path: str,
  value: typing.Any
) -> None
```

###### `path`<sup>Required</sup> <a name="path" id="@cdktf/provider-github.dataGithubOrganizationRoleTeams.DataGithubOrganizationRoleTeams.addOverride.parameter.path"></a>

- *Type:* str

---

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-github.dataGithubOrganizationRoleTeams.DataGithubOrganizationRoleTeams.addOverride.parameter.value"></a>

- *Type:* typing.Any

---

##### `override_logical_id` <a name="override_logical_id" id="@cdktf/provider-github.dataGithubOrganizationRoleTeams.DataGithubOrganizationRoleTeams.overrideLogicalId"></a>

```python
def override_logical_id(
  new_logical_id: str
) -> None
```

Overrides the auto-generated logical ID with a specific ID.

###### `new_logical_id`<sup>Required</sup> <a name="new_logical_id" id="@cdktf/provider-github.dataGithubOrganizationRoleTeams.DataGithubOrganizationRoleTeams.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* str

The new logical ID to use for this stack element.

---

##### `reset_override_logical_id` <a name="reset_override_logical_id" id="@cdktf/provider-github.dataGithubOrganizationRoleTeams.DataGithubOrganizationRoleTeams.resetOverrideLogicalId"></a>

```python
def reset_override_logical_id() -> None
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `to_hcl_terraform` <a name="to_hcl_terraform" id="@cdktf/provider-github.dataGithubOrganizationRoleTeams.DataGithubOrganizationRoleTeams.toHclTerraform"></a>

```python
def to_hcl_terraform() -> typing.Any
```

Adds this resource to the terraform JSON output.

##### `to_metadata` <a name="to_metadata" id="@cdktf/provider-github.dataGithubOrganizationRoleTeams.DataGithubOrganizationRoleTeams.toMetadata"></a>

```python
def to_metadata() -> typing.Any
```

##### `to_terraform` <a name="to_terraform" id="@cdktf/provider-github.dataGithubOrganizationRoleTeams.DataGithubOrganizationRoleTeams.toTerraform"></a>

```python
def to_terraform() -> typing.Any
```

Adds this resource to the terraform JSON output.

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktf/provider-github.dataGithubOrganizationRoleTeams.DataGithubOrganizationRoleTeams.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-github.dataGithubOrganizationRoleTeams.DataGithubOrganizationRoleTeams.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktf/provider-github.dataGithubOrganizationRoleTeams.DataGithubOrganizationRoleTeams.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-github.dataGithubOrganizationRoleTeams.DataGithubOrganizationRoleTeams.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktf/provider-github.dataGithubOrganizationRoleTeams.DataGithubOrganizationRoleTeams.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-github.dataGithubOrganizationRoleTeams.DataGithubOrganizationRoleTeams.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktf/provider-github.dataGithubOrganizationRoleTeams.DataGithubOrganizationRoleTeams.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-github.dataGithubOrganizationRoleTeams.DataGithubOrganizationRoleTeams.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktf/provider-github.dataGithubOrganizationRoleTeams.DataGithubOrganizationRoleTeams.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-github.dataGithubOrganizationRoleTeams.DataGithubOrganizationRoleTeams.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktf/provider-github.dataGithubOrganizationRoleTeams.DataGithubOrganizationRoleTeams.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-github.dataGithubOrganizationRoleTeams.DataGithubOrganizationRoleTeams.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktf/provider-github.dataGithubOrganizationRoleTeams.DataGithubOrganizationRoleTeams.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-github.dataGithubOrganizationRoleTeams.DataGithubOrganizationRoleTeams.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktf/provider-github.dataGithubOrganizationRoleTeams.DataGithubOrganizationRoleTeams.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-github.dataGithubOrganizationRoleTeams.DataGithubOrganizationRoleTeams.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktf/provider-github.dataGithubOrganizationRoleTeams.DataGithubOrganizationRoleTeams.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-github.dataGithubOrganizationRoleTeams.DataGithubOrganizationRoleTeams.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktf/provider-github.dataGithubOrganizationRoleTeams.DataGithubOrganizationRoleTeams.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-github.dataGithubOrganizationRoleTeams.DataGithubOrganizationRoleTeams.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `reset_id` <a name="reset_id" id="@cdktf/provider-github.dataGithubOrganizationRoleTeams.DataGithubOrganizationRoleTeams.resetId"></a>

```python
def reset_id() -> None
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-github.dataGithubOrganizationRoleTeams.DataGithubOrganizationRoleTeams.isConstruct">is_construct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktf/provider-github.dataGithubOrganizationRoleTeams.DataGithubOrganizationRoleTeams.isTerraformElement">is_terraform_element</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-github.dataGithubOrganizationRoleTeams.DataGithubOrganizationRoleTeams.isTerraformDataSource">is_terraform_data_source</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-github.dataGithubOrganizationRoleTeams.DataGithubOrganizationRoleTeams.generateConfigForImport">generate_config_for_import</a></code> | Generates CDKTF code for importing a DataGithubOrganizationRoleTeams resource upon running "cdktf plan <stack-name>". |

---

##### `is_construct` <a name="is_construct" id="@cdktf/provider-github.dataGithubOrganizationRoleTeams.DataGithubOrganizationRoleTeams.isConstruct"></a>

```python
from cdktf_cdktf_provider_github import data_github_organization_role_teams

dataGithubOrganizationRoleTeams.DataGithubOrganizationRoleTeams.is_construct(
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

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-github.dataGithubOrganizationRoleTeams.DataGithubOrganizationRoleTeams.isConstruct.parameter.x"></a>

- *Type:* typing.Any

Any object.

---

##### `is_terraform_element` <a name="is_terraform_element" id="@cdktf/provider-github.dataGithubOrganizationRoleTeams.DataGithubOrganizationRoleTeams.isTerraformElement"></a>

```python
from cdktf_cdktf_provider_github import data_github_organization_role_teams

dataGithubOrganizationRoleTeams.DataGithubOrganizationRoleTeams.is_terraform_element(
  x: typing.Any
)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-github.dataGithubOrganizationRoleTeams.DataGithubOrganizationRoleTeams.isTerraformElement.parameter.x"></a>

- *Type:* typing.Any

---

##### `is_terraform_data_source` <a name="is_terraform_data_source" id="@cdktf/provider-github.dataGithubOrganizationRoleTeams.DataGithubOrganizationRoleTeams.isTerraformDataSource"></a>

```python
from cdktf_cdktf_provider_github import data_github_organization_role_teams

dataGithubOrganizationRoleTeams.DataGithubOrganizationRoleTeams.is_terraform_data_source(
  x: typing.Any
)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-github.dataGithubOrganizationRoleTeams.DataGithubOrganizationRoleTeams.isTerraformDataSource.parameter.x"></a>

- *Type:* typing.Any

---

##### `generate_config_for_import` <a name="generate_config_for_import" id="@cdktf/provider-github.dataGithubOrganizationRoleTeams.DataGithubOrganizationRoleTeams.generateConfigForImport"></a>

```python
from cdktf_cdktf_provider_github import data_github_organization_role_teams

dataGithubOrganizationRoleTeams.DataGithubOrganizationRoleTeams.generate_config_for_import(
  scope: Construct,
  import_to_id: str,
  import_from_id: str,
  provider: TerraformProvider = None
)
```

Generates CDKTF code for importing a DataGithubOrganizationRoleTeams resource upon running "cdktf plan <stack-name>".

###### `scope`<sup>Required</sup> <a name="scope" id="@cdktf/provider-github.dataGithubOrganizationRoleTeams.DataGithubOrganizationRoleTeams.generateConfigForImport.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

###### `import_to_id`<sup>Required</sup> <a name="import_to_id" id="@cdktf/provider-github.dataGithubOrganizationRoleTeams.DataGithubOrganizationRoleTeams.generateConfigForImport.parameter.importToId"></a>

- *Type:* str

The construct id used in the generated config for the DataGithubOrganizationRoleTeams to import.

---

###### `import_from_id`<sup>Required</sup> <a name="import_from_id" id="@cdktf/provider-github.dataGithubOrganizationRoleTeams.DataGithubOrganizationRoleTeams.generateConfigForImport.parameter.importFromId"></a>

- *Type:* str

The id of the existing DataGithubOrganizationRoleTeams that should be imported.

Refer to the {@link https://registry.terraform.io/providers/integrations/github/6.8.0/docs/data-sources/organization_role_teams#import import section} in the documentation of this resource for the id to use

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-github.dataGithubOrganizationRoleTeams.DataGithubOrganizationRoleTeams.generateConfigForImport.parameter.provider"></a>

- *Type:* cdktf.TerraformProvider

? Optional instance of the provider where the DataGithubOrganizationRoleTeams to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-github.dataGithubOrganizationRoleTeams.DataGithubOrganizationRoleTeams.property.node">node</a></code> | <code>constructs.Node</code> | The tree node. |
| <code><a href="#@cdktf/provider-github.dataGithubOrganizationRoleTeams.DataGithubOrganizationRoleTeams.property.cdktfStack">cdktf_stack</a></code> | <code>cdktf.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktf/provider-github.dataGithubOrganizationRoleTeams.DataGithubOrganizationRoleTeams.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-github.dataGithubOrganizationRoleTeams.DataGithubOrganizationRoleTeams.property.friendlyUniqueId">friendly_unique_id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-github.dataGithubOrganizationRoleTeams.DataGithubOrganizationRoleTeams.property.terraformMetaArguments">terraform_meta_arguments</a></code> | <code>typing.Mapping[typing.Any]</code> | *No description.* |
| <code><a href="#@cdktf/provider-github.dataGithubOrganizationRoleTeams.DataGithubOrganizationRoleTeams.property.terraformResourceType">terraform_resource_type</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-github.dataGithubOrganizationRoleTeams.DataGithubOrganizationRoleTeams.property.terraformGeneratorMetadata">terraform_generator_metadata</a></code> | <code>cdktf.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktf/provider-github.dataGithubOrganizationRoleTeams.DataGithubOrganizationRoleTeams.property.count">count</a></code> | <code>typing.Union[int, float] \| cdktf.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktf/provider-github.dataGithubOrganizationRoleTeams.DataGithubOrganizationRoleTeams.property.dependsOn">depends_on</a></code> | <code>typing.List[str]</code> | *No description.* |
| <code><a href="#@cdktf/provider-github.dataGithubOrganizationRoleTeams.DataGithubOrganizationRoleTeams.property.forEach">for_each</a></code> | <code>cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-github.dataGithubOrganizationRoleTeams.DataGithubOrganizationRoleTeams.property.lifecycle">lifecycle</a></code> | <code>cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-github.dataGithubOrganizationRoleTeams.DataGithubOrganizationRoleTeams.property.provider">provider</a></code> | <code>cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-github.dataGithubOrganizationRoleTeams.DataGithubOrganizationRoleTeams.property.teams">teams</a></code> | <code><a href="#@cdktf/provider-github.dataGithubOrganizationRoleTeams.DataGithubOrganizationRoleTeamsTeamsList">DataGithubOrganizationRoleTeamsTeamsList</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-github.dataGithubOrganizationRoleTeams.DataGithubOrganizationRoleTeams.property.idInput">id_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-github.dataGithubOrganizationRoleTeams.DataGithubOrganizationRoleTeams.property.roleIdInput">role_id_input</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#@cdktf/provider-github.dataGithubOrganizationRoleTeams.DataGithubOrganizationRoleTeams.property.id">id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-github.dataGithubOrganizationRoleTeams.DataGithubOrganizationRoleTeams.property.roleId">role_id</a></code> | <code>typing.Union[int, float]</code> | *No description.* |

---

##### `node`<sup>Required</sup> <a name="node" id="@cdktf/provider-github.dataGithubOrganizationRoleTeams.DataGithubOrganizationRoleTeams.property.node"></a>

```python
node: Node
```

- *Type:* constructs.Node

The tree node.

---

##### `cdktf_stack`<sup>Required</sup> <a name="cdktf_stack" id="@cdktf/provider-github.dataGithubOrganizationRoleTeams.DataGithubOrganizationRoleTeams.property.cdktfStack"></a>

```python
cdktf_stack: TerraformStack
```

- *Type:* cdktf.TerraformStack

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-github.dataGithubOrganizationRoleTeams.DataGithubOrganizationRoleTeams.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `friendly_unique_id`<sup>Required</sup> <a name="friendly_unique_id" id="@cdktf/provider-github.dataGithubOrganizationRoleTeams.DataGithubOrganizationRoleTeams.property.friendlyUniqueId"></a>

```python
friendly_unique_id: str
```

- *Type:* str

---

##### `terraform_meta_arguments`<sup>Required</sup> <a name="terraform_meta_arguments" id="@cdktf/provider-github.dataGithubOrganizationRoleTeams.DataGithubOrganizationRoleTeams.property.terraformMetaArguments"></a>

```python
terraform_meta_arguments: typing.Mapping[typing.Any]
```

- *Type:* typing.Mapping[typing.Any]

---

##### `terraform_resource_type`<sup>Required</sup> <a name="terraform_resource_type" id="@cdktf/provider-github.dataGithubOrganizationRoleTeams.DataGithubOrganizationRoleTeams.property.terraformResourceType"></a>

```python
terraform_resource_type: str
```

- *Type:* str

---

##### `terraform_generator_metadata`<sup>Optional</sup> <a name="terraform_generator_metadata" id="@cdktf/provider-github.dataGithubOrganizationRoleTeams.DataGithubOrganizationRoleTeams.property.terraformGeneratorMetadata"></a>

```python
terraform_generator_metadata: TerraformProviderGeneratorMetadata
```

- *Type:* cdktf.TerraformProviderGeneratorMetadata

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-github.dataGithubOrganizationRoleTeams.DataGithubOrganizationRoleTeams.property.count"></a>

```python
count: typing.Union[int, float] | TerraformCount
```

- *Type:* typing.Union[int, float] | cdktf.TerraformCount

---

##### `depends_on`<sup>Optional</sup> <a name="depends_on" id="@cdktf/provider-github.dataGithubOrganizationRoleTeams.DataGithubOrganizationRoleTeams.property.dependsOn"></a>

```python
depends_on: typing.List[str]
```

- *Type:* typing.List[str]

---

##### `for_each`<sup>Optional</sup> <a name="for_each" id="@cdktf/provider-github.dataGithubOrganizationRoleTeams.DataGithubOrganizationRoleTeams.property.forEach"></a>

```python
for_each: ITerraformIterator
```

- *Type:* cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-github.dataGithubOrganizationRoleTeams.DataGithubOrganizationRoleTeams.property.lifecycle"></a>

```python
lifecycle: TerraformResourceLifecycle
```

- *Type:* cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-github.dataGithubOrganizationRoleTeams.DataGithubOrganizationRoleTeams.property.provider"></a>

```python
provider: TerraformProvider
```

- *Type:* cdktf.TerraformProvider

---

##### `teams`<sup>Required</sup> <a name="teams" id="@cdktf/provider-github.dataGithubOrganizationRoleTeams.DataGithubOrganizationRoleTeams.property.teams"></a>

```python
teams: DataGithubOrganizationRoleTeamsTeamsList
```

- *Type:* <a href="#@cdktf/provider-github.dataGithubOrganizationRoleTeams.DataGithubOrganizationRoleTeamsTeamsList">DataGithubOrganizationRoleTeamsTeamsList</a>

---

##### `id_input`<sup>Optional</sup> <a name="id_input" id="@cdktf/provider-github.dataGithubOrganizationRoleTeams.DataGithubOrganizationRoleTeams.property.idInput"></a>

```python
id_input: str
```

- *Type:* str

---

##### `role_id_input`<sup>Optional</sup> <a name="role_id_input" id="@cdktf/provider-github.dataGithubOrganizationRoleTeams.DataGithubOrganizationRoleTeams.property.roleIdInput"></a>

```python
role_id_input: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-github.dataGithubOrganizationRoleTeams.DataGithubOrganizationRoleTeams.property.id"></a>

```python
id: str
```

- *Type:* str

---

##### `role_id`<sup>Required</sup> <a name="role_id" id="@cdktf/provider-github.dataGithubOrganizationRoleTeams.DataGithubOrganizationRoleTeams.property.roleId"></a>

```python
role_id: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-github.dataGithubOrganizationRoleTeams.DataGithubOrganizationRoleTeams.property.tfResourceType">tfResourceType</a></code> | <code>str</code> | *No description.* |

---

##### `tfResourceType`<sup>Required</sup> <a name="tfResourceType" id="@cdktf/provider-github.dataGithubOrganizationRoleTeams.DataGithubOrganizationRoleTeams.property.tfResourceType"></a>

```python
tfResourceType: str
```

- *Type:* str

---

## Structs <a name="Structs" id="Structs"></a>

### DataGithubOrganizationRoleTeamsConfig <a name="DataGithubOrganizationRoleTeamsConfig" id="@cdktf/provider-github.dataGithubOrganizationRoleTeams.DataGithubOrganizationRoleTeamsConfig"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-github.dataGithubOrganizationRoleTeams.DataGithubOrganizationRoleTeamsConfig.Initializer"></a>

```python
from cdktf_cdktf_provider_github import data_github_organization_role_teams

dataGithubOrganizationRoleTeams.DataGithubOrganizationRoleTeamsConfig(
  connection: SSHProvisionerConnection | WinrmProvisionerConnection = None,
  count: typing.Union[int, float] | TerraformCount = None,
  depends_on: typing.List[ITerraformDependable] = None,
  for_each: ITerraformIterator = None,
  lifecycle: TerraformResourceLifecycle = None,
  provider: TerraformProvider = None,
  provisioners: typing.List[FileProvisioner | LocalExecProvisioner | RemoteExecProvisioner] = None,
  role_id: typing.Union[int, float],
  id: str = None
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-github.dataGithubOrganizationRoleTeams.DataGithubOrganizationRoleTeamsConfig.property.connection">connection</a></code> | <code>cdktf.SSHProvisionerConnection \| cdktf.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktf/provider-github.dataGithubOrganizationRoleTeams.DataGithubOrganizationRoleTeamsConfig.property.count">count</a></code> | <code>typing.Union[int, float] \| cdktf.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktf/provider-github.dataGithubOrganizationRoleTeams.DataGithubOrganizationRoleTeamsConfig.property.dependsOn">depends_on</a></code> | <code>typing.List[cdktf.ITerraformDependable]</code> | *No description.* |
| <code><a href="#@cdktf/provider-github.dataGithubOrganizationRoleTeams.DataGithubOrganizationRoleTeamsConfig.property.forEach">for_each</a></code> | <code>cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-github.dataGithubOrganizationRoleTeams.DataGithubOrganizationRoleTeamsConfig.property.lifecycle">lifecycle</a></code> | <code>cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-github.dataGithubOrganizationRoleTeams.DataGithubOrganizationRoleTeamsConfig.property.provider">provider</a></code> | <code>cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-github.dataGithubOrganizationRoleTeams.DataGithubOrganizationRoleTeamsConfig.property.provisioners">provisioners</a></code> | <code>typing.List[cdktf.FileProvisioner \| cdktf.LocalExecProvisioner \| cdktf.RemoteExecProvisioner]</code> | *No description.* |
| <code><a href="#@cdktf/provider-github.dataGithubOrganizationRoleTeams.DataGithubOrganizationRoleTeamsConfig.property.roleId">role_id</a></code> | <code>typing.Union[int, float]</code> | The unique identifier of the organization role. |
| <code><a href="#@cdktf/provider-github.dataGithubOrganizationRoleTeams.DataGithubOrganizationRoleTeamsConfig.property.id">id</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/integrations/github/6.8.0/docs/data-sources/organization_role_teams#id DataGithubOrganizationRoleTeams#id}. |

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktf/provider-github.dataGithubOrganizationRoleTeams.DataGithubOrganizationRoleTeamsConfig.property.connection"></a>

```python
connection: SSHProvisionerConnection | WinrmProvisionerConnection
```

- *Type:* cdktf.SSHProvisionerConnection | cdktf.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-github.dataGithubOrganizationRoleTeams.DataGithubOrganizationRoleTeamsConfig.property.count"></a>

```python
count: typing.Union[int, float] | TerraformCount
```

- *Type:* typing.Union[int, float] | cdktf.TerraformCount

---

##### `depends_on`<sup>Optional</sup> <a name="depends_on" id="@cdktf/provider-github.dataGithubOrganizationRoleTeams.DataGithubOrganizationRoleTeamsConfig.property.dependsOn"></a>

```python
depends_on: typing.List[ITerraformDependable]
```

- *Type:* typing.List[cdktf.ITerraformDependable]

---

##### `for_each`<sup>Optional</sup> <a name="for_each" id="@cdktf/provider-github.dataGithubOrganizationRoleTeams.DataGithubOrganizationRoleTeamsConfig.property.forEach"></a>

```python
for_each: ITerraformIterator
```

- *Type:* cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-github.dataGithubOrganizationRoleTeams.DataGithubOrganizationRoleTeamsConfig.property.lifecycle"></a>

```python
lifecycle: TerraformResourceLifecycle
```

- *Type:* cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-github.dataGithubOrganizationRoleTeams.DataGithubOrganizationRoleTeamsConfig.property.provider"></a>

```python
provider: TerraformProvider
```

- *Type:* cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktf/provider-github.dataGithubOrganizationRoleTeams.DataGithubOrganizationRoleTeamsConfig.property.provisioners"></a>

```python
provisioners: typing.List[FileProvisioner | LocalExecProvisioner | RemoteExecProvisioner]
```

- *Type:* typing.List[cdktf.FileProvisioner | cdktf.LocalExecProvisioner | cdktf.RemoteExecProvisioner]

---

##### `role_id`<sup>Required</sup> <a name="role_id" id="@cdktf/provider-github.dataGithubOrganizationRoleTeams.DataGithubOrganizationRoleTeamsConfig.property.roleId"></a>

```python
role_id: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

The unique identifier of the organization role.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/integrations/github/6.8.0/docs/data-sources/organization_role_teams#role_id DataGithubOrganizationRoleTeams#role_id}

---

##### `id`<sup>Optional</sup> <a name="id" id="@cdktf/provider-github.dataGithubOrganizationRoleTeams.DataGithubOrganizationRoleTeamsConfig.property.id"></a>

```python
id: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/integrations/github/6.8.0/docs/data-sources/organization_role_teams#id DataGithubOrganizationRoleTeams#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

### DataGithubOrganizationRoleTeamsTeams <a name="DataGithubOrganizationRoleTeamsTeams" id="@cdktf/provider-github.dataGithubOrganizationRoleTeams.DataGithubOrganizationRoleTeamsTeams"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-github.dataGithubOrganizationRoleTeams.DataGithubOrganizationRoleTeamsTeams.Initializer"></a>

```python
from cdktf_cdktf_provider_github import data_github_organization_role_teams

dataGithubOrganizationRoleTeams.DataGithubOrganizationRoleTeamsTeams()
```


## Classes <a name="Classes" id="Classes"></a>

### DataGithubOrganizationRoleTeamsTeamsList <a name="DataGithubOrganizationRoleTeamsTeamsList" id="@cdktf/provider-github.dataGithubOrganizationRoleTeams.DataGithubOrganizationRoleTeamsTeamsList"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-github.dataGithubOrganizationRoleTeams.DataGithubOrganizationRoleTeamsTeamsList.Initializer"></a>

```python
from cdktf_cdktf_provider_github import data_github_organization_role_teams

dataGithubOrganizationRoleTeams.DataGithubOrganizationRoleTeamsTeamsList(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  wraps_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-github.dataGithubOrganizationRoleTeams.DataGithubOrganizationRoleTeamsTeamsList.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-github.dataGithubOrganizationRoleTeams.DataGithubOrganizationRoleTeamsTeamsList.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-github.dataGithubOrganizationRoleTeams.DataGithubOrganizationRoleTeamsTeamsList.Initializer.parameter.wrapsSet">wraps_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktf/provider-github.dataGithubOrganizationRoleTeams.DataGithubOrganizationRoleTeamsTeamsList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-github.dataGithubOrganizationRoleTeams.DataGithubOrganizationRoleTeamsTeamsList.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `wraps_set`<sup>Required</sup> <a name="wraps_set" id="@cdktf/provider-github.dataGithubOrganizationRoleTeams.DataGithubOrganizationRoleTeamsTeamsList.Initializer.parameter.wrapsSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-github.dataGithubOrganizationRoleTeams.DataGithubOrganizationRoleTeamsTeamsList.allWithMapKey">all_with_map_key</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktf/provider-github.dataGithubOrganizationRoleTeams.DataGithubOrganizationRoleTeamsTeamsList.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-github.dataGithubOrganizationRoleTeams.DataGithubOrganizationRoleTeamsTeamsList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-github.dataGithubOrganizationRoleTeams.DataGithubOrganizationRoleTeamsTeamsList.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-github.dataGithubOrganizationRoleTeams.DataGithubOrganizationRoleTeamsTeamsList.get">get</a></code> | *No description.* |

---

##### `all_with_map_key` <a name="all_with_map_key" id="@cdktf/provider-github.dataGithubOrganizationRoleTeams.DataGithubOrganizationRoleTeamsTeamsList.allWithMapKey"></a>

```python
def all_with_map_key(
  map_key_attribute_name: str
) -> DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `map_key_attribute_name`<sup>Required</sup> <a name="map_key_attribute_name" id="@cdktf/provider-github.dataGithubOrganizationRoleTeams.DataGithubOrganizationRoleTeamsTeamsList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* str

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktf/provider-github.dataGithubOrganizationRoleTeams.DataGithubOrganizationRoleTeamsTeamsList.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `resolve` <a name="resolve" id="@cdktf/provider-github.dataGithubOrganizationRoleTeams.DataGithubOrganizationRoleTeamsTeamsList.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-github.dataGithubOrganizationRoleTeams.DataGithubOrganizationRoleTeamsTeamsList.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktf/provider-github.dataGithubOrganizationRoleTeams.DataGithubOrganizationRoleTeamsTeamsList.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktf/provider-github.dataGithubOrganizationRoleTeams.DataGithubOrganizationRoleTeamsTeamsList.get"></a>

```python
def get(
  index: typing.Union[int, float]
) -> DataGithubOrganizationRoleTeamsTeamsOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktf/provider-github.dataGithubOrganizationRoleTeams.DataGithubOrganizationRoleTeamsTeamsList.get.parameter.index"></a>

- *Type:* typing.Union[int, float]

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-github.dataGithubOrganizationRoleTeams.DataGithubOrganizationRoleTeamsTeamsList.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-github.dataGithubOrganizationRoleTeams.DataGithubOrganizationRoleTeamsTeamsList.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktf/provider-github.dataGithubOrganizationRoleTeams.DataGithubOrganizationRoleTeamsTeamsList.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-github.dataGithubOrganizationRoleTeams.DataGithubOrganizationRoleTeamsTeamsList.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---


### DataGithubOrganizationRoleTeamsTeamsOutputReference <a name="DataGithubOrganizationRoleTeamsTeamsOutputReference" id="@cdktf/provider-github.dataGithubOrganizationRoleTeams.DataGithubOrganizationRoleTeamsTeamsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-github.dataGithubOrganizationRoleTeams.DataGithubOrganizationRoleTeamsTeamsOutputReference.Initializer"></a>

```python
from cdktf_cdktf_provider_github import data_github_organization_role_teams

dataGithubOrganizationRoleTeams.DataGithubOrganizationRoleTeamsTeamsOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  complex_object_index: typing.Union[int, float],
  complex_object_is_from_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-github.dataGithubOrganizationRoleTeams.DataGithubOrganizationRoleTeamsTeamsOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-github.dataGithubOrganizationRoleTeams.DataGithubOrganizationRoleTeamsTeamsOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-github.dataGithubOrganizationRoleTeams.DataGithubOrganizationRoleTeamsTeamsOutputReference.Initializer.parameter.complexObjectIndex">complex_object_index</a></code> | <code>typing.Union[int, float]</code> | the index of this item in the list. |
| <code><a href="#@cdktf/provider-github.dataGithubOrganizationRoleTeams.DataGithubOrganizationRoleTeamsTeamsOutputReference.Initializer.parameter.complexObjectIsFromSet">complex_object_is_from_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktf/provider-github.dataGithubOrganizationRoleTeams.DataGithubOrganizationRoleTeamsTeamsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-github.dataGithubOrganizationRoleTeams.DataGithubOrganizationRoleTeamsTeamsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `complex_object_index`<sup>Required</sup> <a name="complex_object_index" id="@cdktf/provider-github.dataGithubOrganizationRoleTeams.DataGithubOrganizationRoleTeamsTeamsOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* typing.Union[int, float]

the index of this item in the list.

---

##### `complex_object_is_from_set`<sup>Required</sup> <a name="complex_object_is_from_set" id="@cdktf/provider-github.dataGithubOrganizationRoleTeams.DataGithubOrganizationRoleTeamsTeamsOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-github.dataGithubOrganizationRoleTeams.DataGithubOrganizationRoleTeamsTeamsOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-github.dataGithubOrganizationRoleTeams.DataGithubOrganizationRoleTeamsTeamsOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-github.dataGithubOrganizationRoleTeams.DataGithubOrganizationRoleTeamsTeamsOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-github.dataGithubOrganizationRoleTeams.DataGithubOrganizationRoleTeamsTeamsOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-github.dataGithubOrganizationRoleTeams.DataGithubOrganizationRoleTeamsTeamsOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-github.dataGithubOrganizationRoleTeams.DataGithubOrganizationRoleTeamsTeamsOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-github.dataGithubOrganizationRoleTeams.DataGithubOrganizationRoleTeamsTeamsOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-github.dataGithubOrganizationRoleTeams.DataGithubOrganizationRoleTeamsTeamsOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-github.dataGithubOrganizationRoleTeams.DataGithubOrganizationRoleTeamsTeamsOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-github.dataGithubOrganizationRoleTeams.DataGithubOrganizationRoleTeamsTeamsOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-github.dataGithubOrganizationRoleTeams.DataGithubOrganizationRoleTeamsTeamsOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-github.dataGithubOrganizationRoleTeams.DataGithubOrganizationRoleTeamsTeamsOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-github.dataGithubOrganizationRoleTeams.DataGithubOrganizationRoleTeamsTeamsOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktf/provider-github.dataGithubOrganizationRoleTeams.DataGithubOrganizationRoleTeamsTeamsOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktf/provider-github.dataGithubOrganizationRoleTeams.DataGithubOrganizationRoleTeamsTeamsOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-github.dataGithubOrganizationRoleTeams.DataGithubOrganizationRoleTeamsTeamsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktf/provider-github.dataGithubOrganizationRoleTeams.DataGithubOrganizationRoleTeamsTeamsOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-github.dataGithubOrganizationRoleTeams.DataGithubOrganizationRoleTeamsTeamsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktf/provider-github.dataGithubOrganizationRoleTeams.DataGithubOrganizationRoleTeamsTeamsOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-github.dataGithubOrganizationRoleTeams.DataGithubOrganizationRoleTeamsTeamsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktf/provider-github.dataGithubOrganizationRoleTeams.DataGithubOrganizationRoleTeamsTeamsOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-github.dataGithubOrganizationRoleTeams.DataGithubOrganizationRoleTeamsTeamsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktf/provider-github.dataGithubOrganizationRoleTeams.DataGithubOrganizationRoleTeamsTeamsOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-github.dataGithubOrganizationRoleTeams.DataGithubOrganizationRoleTeamsTeamsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktf/provider-github.dataGithubOrganizationRoleTeams.DataGithubOrganizationRoleTeamsTeamsOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-github.dataGithubOrganizationRoleTeams.DataGithubOrganizationRoleTeamsTeamsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktf/provider-github.dataGithubOrganizationRoleTeams.DataGithubOrganizationRoleTeamsTeamsOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-github.dataGithubOrganizationRoleTeams.DataGithubOrganizationRoleTeamsTeamsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktf/provider-github.dataGithubOrganizationRoleTeams.DataGithubOrganizationRoleTeamsTeamsOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-github.dataGithubOrganizationRoleTeams.DataGithubOrganizationRoleTeamsTeamsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktf/provider-github.dataGithubOrganizationRoleTeams.DataGithubOrganizationRoleTeamsTeamsOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-github.dataGithubOrganizationRoleTeams.DataGithubOrganizationRoleTeamsTeamsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktf/provider-github.dataGithubOrganizationRoleTeams.DataGithubOrganizationRoleTeamsTeamsOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-github.dataGithubOrganizationRoleTeams.DataGithubOrganizationRoleTeamsTeamsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktf/provider-github.dataGithubOrganizationRoleTeams.DataGithubOrganizationRoleTeamsTeamsOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-github.dataGithubOrganizationRoleTeams.DataGithubOrganizationRoleTeamsTeamsOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktf/provider-github.dataGithubOrganizationRoleTeams.DataGithubOrganizationRoleTeamsTeamsOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-github.dataGithubOrganizationRoleTeams.DataGithubOrganizationRoleTeamsTeamsOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-github.dataGithubOrganizationRoleTeams.DataGithubOrganizationRoleTeamsTeamsOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-github.dataGithubOrganizationRoleTeams.DataGithubOrganizationRoleTeamsTeamsOutputReference.property.name">name</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-github.dataGithubOrganizationRoleTeams.DataGithubOrganizationRoleTeamsTeamsOutputReference.property.permission">permission</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-github.dataGithubOrganizationRoleTeams.DataGithubOrganizationRoleTeamsTeamsOutputReference.property.slug">slug</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-github.dataGithubOrganizationRoleTeams.DataGithubOrganizationRoleTeamsTeamsOutputReference.property.teamId">team_id</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#@cdktf/provider-github.dataGithubOrganizationRoleTeams.DataGithubOrganizationRoleTeamsTeamsOutputReference.property.internalValue">internal_value</a></code> | <code><a href="#@cdktf/provider-github.dataGithubOrganizationRoleTeams.DataGithubOrganizationRoleTeamsTeams">DataGithubOrganizationRoleTeamsTeams</a></code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktf/provider-github.dataGithubOrganizationRoleTeams.DataGithubOrganizationRoleTeamsTeamsOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-github.dataGithubOrganizationRoleTeams.DataGithubOrganizationRoleTeamsTeamsOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktf/provider-github.dataGithubOrganizationRoleTeams.DataGithubOrganizationRoleTeamsTeamsOutputReference.property.name"></a>

```python
name: str
```

- *Type:* str

---

##### `permission`<sup>Required</sup> <a name="permission" id="@cdktf/provider-github.dataGithubOrganizationRoleTeams.DataGithubOrganizationRoleTeamsTeamsOutputReference.property.permission"></a>

```python
permission: str
```

- *Type:* str

---

##### `slug`<sup>Required</sup> <a name="slug" id="@cdktf/provider-github.dataGithubOrganizationRoleTeams.DataGithubOrganizationRoleTeamsTeamsOutputReference.property.slug"></a>

```python
slug: str
```

- *Type:* str

---

##### `team_id`<sup>Required</sup> <a name="team_id" id="@cdktf/provider-github.dataGithubOrganizationRoleTeams.DataGithubOrganizationRoleTeamsTeamsOutputReference.property.teamId"></a>

```python
team_id: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktf/provider-github.dataGithubOrganizationRoleTeams.DataGithubOrganizationRoleTeamsTeamsOutputReference.property.internalValue"></a>

```python
internal_value: DataGithubOrganizationRoleTeamsTeams
```

- *Type:* <a href="#@cdktf/provider-github.dataGithubOrganizationRoleTeams.DataGithubOrganizationRoleTeamsTeams">DataGithubOrganizationRoleTeamsTeams</a>

---



