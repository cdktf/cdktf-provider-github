# `data_github_organization_ip_allow_list`

Refer to the Terraform Registory for docs: [`data_github_organization_ip_allow_list`](https://registry.terraform.io/providers/integrations/github/5.34.0/docs/data-sources/organization_ip_allow_list).

# `dataGithubOrganizationIpAllowList` Submodule <a name="`dataGithubOrganizationIpAllowList` Submodule" id="@cdktf/provider-github.dataGithubOrganizationIpAllowList"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### DataGithubOrganizationIpAllowList <a name="DataGithubOrganizationIpAllowList" id="@cdktf/provider-github.dataGithubOrganizationIpAllowList.DataGithubOrganizationIpAllowList"></a>

Represents a {@link https://registry.terraform.io/providers/integrations/github/5.34.0/docs/data-sources/organization_ip_allow_list github_organization_ip_allow_list}.

#### Initializers <a name="Initializers" id="@cdktf/provider-github.dataGithubOrganizationIpAllowList.DataGithubOrganizationIpAllowList.Initializer"></a>

```python
from cdktf_cdktf_provider_github import data_github_organization_ip_allow_list

dataGithubOrganizationIpAllowList.DataGithubOrganizationIpAllowList(
  scope: Construct,
  id: str,
  connection: typing.Union[SSHProvisionerConnection, WinrmProvisionerConnection] = None,
  count: typing.Union[typing.Union[int, float], TerraformCount] = None,
  depends_on: typing.List[ITerraformDependable] = None,
  for_each: ITerraformIterator = None,
  lifecycle: TerraformResourceLifecycle = None,
  provider: TerraformProvider = None,
  provisioners: typing.List[typing.Union[FileProvisioner, LocalExecProvisioner, RemoteExecProvisioner]] = None,
  id: str = None
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-github.dataGithubOrganizationIpAllowList.DataGithubOrganizationIpAllowList.Initializer.parameter.scope">scope</a></code> | <code>constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktf/provider-github.dataGithubOrganizationIpAllowList.DataGithubOrganizationIpAllowList.Initializer.parameter.id">id</a></code> | <code>str</code> | The scoped construct ID. |
| <code><a href="#@cdktf/provider-github.dataGithubOrganizationIpAllowList.DataGithubOrganizationIpAllowList.Initializer.parameter.connection">connection</a></code> | <code>typing.Union[cdktf.SSHProvisionerConnection, cdktf.WinrmProvisionerConnection]</code> | *No description.* |
| <code><a href="#@cdktf/provider-github.dataGithubOrganizationIpAllowList.DataGithubOrganizationIpAllowList.Initializer.parameter.count">count</a></code> | <code>typing.Union[typing.Union[int, float], cdktf.TerraformCount]</code> | *No description.* |
| <code><a href="#@cdktf/provider-github.dataGithubOrganizationIpAllowList.DataGithubOrganizationIpAllowList.Initializer.parameter.dependsOn">depends_on</a></code> | <code>typing.List[cdktf.ITerraformDependable]</code> | *No description.* |
| <code><a href="#@cdktf/provider-github.dataGithubOrganizationIpAllowList.DataGithubOrganizationIpAllowList.Initializer.parameter.forEach">for_each</a></code> | <code>cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-github.dataGithubOrganizationIpAllowList.DataGithubOrganizationIpAllowList.Initializer.parameter.lifecycle">lifecycle</a></code> | <code>cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-github.dataGithubOrganizationIpAllowList.DataGithubOrganizationIpAllowList.Initializer.parameter.provider">provider</a></code> | <code>cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-github.dataGithubOrganizationIpAllowList.DataGithubOrganizationIpAllowList.Initializer.parameter.provisioners">provisioners</a></code> | <code>typing.List[typing.Union[cdktf.FileProvisioner, cdktf.LocalExecProvisioner, cdktf.RemoteExecProvisioner]]</code> | *No description.* |
| <code><a href="#@cdktf/provider-github.dataGithubOrganizationIpAllowList.DataGithubOrganizationIpAllowList.Initializer.parameter.id">id</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/integrations/github/5.34.0/docs/data-sources/organization_ip_allow_list#id DataGithubOrganizationIpAllowList#id}. |

---

##### `scope`<sup>Required</sup> <a name="scope" id="@cdktf/provider-github.dataGithubOrganizationIpAllowList.DataGithubOrganizationIpAllowList.Initializer.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-github.dataGithubOrganizationIpAllowList.DataGithubOrganizationIpAllowList.Initializer.parameter.id"></a>

- *Type:* str

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktf/provider-github.dataGithubOrganizationIpAllowList.DataGithubOrganizationIpAllowList.Initializer.parameter.connection"></a>

- *Type:* typing.Union[cdktf.SSHProvisionerConnection, cdktf.WinrmProvisionerConnection]

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-github.dataGithubOrganizationIpAllowList.DataGithubOrganizationIpAllowList.Initializer.parameter.count"></a>

- *Type:* typing.Union[typing.Union[int, float], cdktf.TerraformCount]

---

##### `depends_on`<sup>Optional</sup> <a name="depends_on" id="@cdktf/provider-github.dataGithubOrganizationIpAllowList.DataGithubOrganizationIpAllowList.Initializer.parameter.dependsOn"></a>

- *Type:* typing.List[cdktf.ITerraformDependable]

---

##### `for_each`<sup>Optional</sup> <a name="for_each" id="@cdktf/provider-github.dataGithubOrganizationIpAllowList.DataGithubOrganizationIpAllowList.Initializer.parameter.forEach"></a>

- *Type:* cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-github.dataGithubOrganizationIpAllowList.DataGithubOrganizationIpAllowList.Initializer.parameter.lifecycle"></a>

- *Type:* cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-github.dataGithubOrganizationIpAllowList.DataGithubOrganizationIpAllowList.Initializer.parameter.provider"></a>

- *Type:* cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktf/provider-github.dataGithubOrganizationIpAllowList.DataGithubOrganizationIpAllowList.Initializer.parameter.provisioners"></a>

- *Type:* typing.List[typing.Union[cdktf.FileProvisioner, cdktf.LocalExecProvisioner, cdktf.RemoteExecProvisioner]]

---

##### `id`<sup>Optional</sup> <a name="id" id="@cdktf/provider-github.dataGithubOrganizationIpAllowList.DataGithubOrganizationIpAllowList.Initializer.parameter.id"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/integrations/github/5.34.0/docs/data-sources/organization_ip_allow_list#id DataGithubOrganizationIpAllowList#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-github.dataGithubOrganizationIpAllowList.DataGithubOrganizationIpAllowList.toString">to_string</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktf/provider-github.dataGithubOrganizationIpAllowList.DataGithubOrganizationIpAllowList.addOverride">add_override</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-github.dataGithubOrganizationIpAllowList.DataGithubOrganizationIpAllowList.overrideLogicalId">override_logical_id</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktf/provider-github.dataGithubOrganizationIpAllowList.DataGithubOrganizationIpAllowList.resetOverrideLogicalId">reset_override_logical_id</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktf/provider-github.dataGithubOrganizationIpAllowList.DataGithubOrganizationIpAllowList.toMetadata">to_metadata</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-github.dataGithubOrganizationIpAllowList.DataGithubOrganizationIpAllowList.toTerraform">to_terraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktf/provider-github.dataGithubOrganizationIpAllowList.DataGithubOrganizationIpAllowList.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-github.dataGithubOrganizationIpAllowList.DataGithubOrganizationIpAllowList.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-github.dataGithubOrganizationIpAllowList.DataGithubOrganizationIpAllowList.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-github.dataGithubOrganizationIpAllowList.DataGithubOrganizationIpAllowList.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-github.dataGithubOrganizationIpAllowList.DataGithubOrganizationIpAllowList.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-github.dataGithubOrganizationIpAllowList.DataGithubOrganizationIpAllowList.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-github.dataGithubOrganizationIpAllowList.DataGithubOrganizationIpAllowList.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-github.dataGithubOrganizationIpAllowList.DataGithubOrganizationIpAllowList.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-github.dataGithubOrganizationIpAllowList.DataGithubOrganizationIpAllowList.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-github.dataGithubOrganizationIpAllowList.DataGithubOrganizationIpAllowList.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-github.dataGithubOrganizationIpAllowList.DataGithubOrganizationIpAllowList.resetId">reset_id</a></code> | *No description.* |

---

##### `to_string` <a name="to_string" id="@cdktf/provider-github.dataGithubOrganizationIpAllowList.DataGithubOrganizationIpAllowList.toString"></a>

```python
def to_string() -> str
```

Returns a string representation of this construct.

##### `add_override` <a name="add_override" id="@cdktf/provider-github.dataGithubOrganizationIpAllowList.DataGithubOrganizationIpAllowList.addOverride"></a>

```python
def add_override(
  path: str,
  value: typing.Any
) -> None
```

###### `path`<sup>Required</sup> <a name="path" id="@cdktf/provider-github.dataGithubOrganizationIpAllowList.DataGithubOrganizationIpAllowList.addOverride.parameter.path"></a>

- *Type:* str

---

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-github.dataGithubOrganizationIpAllowList.DataGithubOrganizationIpAllowList.addOverride.parameter.value"></a>

- *Type:* typing.Any

---

##### `override_logical_id` <a name="override_logical_id" id="@cdktf/provider-github.dataGithubOrganizationIpAllowList.DataGithubOrganizationIpAllowList.overrideLogicalId"></a>

```python
def override_logical_id(
  new_logical_id: str
) -> None
```

Overrides the auto-generated logical ID with a specific ID.

###### `new_logical_id`<sup>Required</sup> <a name="new_logical_id" id="@cdktf/provider-github.dataGithubOrganizationIpAllowList.DataGithubOrganizationIpAllowList.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* str

The new logical ID to use for this stack element.

---

##### `reset_override_logical_id` <a name="reset_override_logical_id" id="@cdktf/provider-github.dataGithubOrganizationIpAllowList.DataGithubOrganizationIpAllowList.resetOverrideLogicalId"></a>

```python
def reset_override_logical_id() -> None
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `to_metadata` <a name="to_metadata" id="@cdktf/provider-github.dataGithubOrganizationIpAllowList.DataGithubOrganizationIpAllowList.toMetadata"></a>

```python
def to_metadata() -> typing.Any
```

##### `to_terraform` <a name="to_terraform" id="@cdktf/provider-github.dataGithubOrganizationIpAllowList.DataGithubOrganizationIpAllowList.toTerraform"></a>

```python
def to_terraform() -> typing.Any
```

Adds this resource to the terraform JSON output.

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktf/provider-github.dataGithubOrganizationIpAllowList.DataGithubOrganizationIpAllowList.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-github.dataGithubOrganizationIpAllowList.DataGithubOrganizationIpAllowList.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktf/provider-github.dataGithubOrganizationIpAllowList.DataGithubOrganizationIpAllowList.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-github.dataGithubOrganizationIpAllowList.DataGithubOrganizationIpAllowList.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktf/provider-github.dataGithubOrganizationIpAllowList.DataGithubOrganizationIpAllowList.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-github.dataGithubOrganizationIpAllowList.DataGithubOrganizationIpAllowList.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktf/provider-github.dataGithubOrganizationIpAllowList.DataGithubOrganizationIpAllowList.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-github.dataGithubOrganizationIpAllowList.DataGithubOrganizationIpAllowList.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktf/provider-github.dataGithubOrganizationIpAllowList.DataGithubOrganizationIpAllowList.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-github.dataGithubOrganizationIpAllowList.DataGithubOrganizationIpAllowList.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktf/provider-github.dataGithubOrganizationIpAllowList.DataGithubOrganizationIpAllowList.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-github.dataGithubOrganizationIpAllowList.DataGithubOrganizationIpAllowList.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktf/provider-github.dataGithubOrganizationIpAllowList.DataGithubOrganizationIpAllowList.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-github.dataGithubOrganizationIpAllowList.DataGithubOrganizationIpAllowList.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktf/provider-github.dataGithubOrganizationIpAllowList.DataGithubOrganizationIpAllowList.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-github.dataGithubOrganizationIpAllowList.DataGithubOrganizationIpAllowList.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktf/provider-github.dataGithubOrganizationIpAllowList.DataGithubOrganizationIpAllowList.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-github.dataGithubOrganizationIpAllowList.DataGithubOrganizationIpAllowList.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktf/provider-github.dataGithubOrganizationIpAllowList.DataGithubOrganizationIpAllowList.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-github.dataGithubOrganizationIpAllowList.DataGithubOrganizationIpAllowList.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `reset_id` <a name="reset_id" id="@cdktf/provider-github.dataGithubOrganizationIpAllowList.DataGithubOrganizationIpAllowList.resetId"></a>

```python
def reset_id() -> None
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-github.dataGithubOrganizationIpAllowList.DataGithubOrganizationIpAllowList.isConstruct">is_construct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktf/provider-github.dataGithubOrganizationIpAllowList.DataGithubOrganizationIpAllowList.isTerraformElement">is_terraform_element</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-github.dataGithubOrganizationIpAllowList.DataGithubOrganizationIpAllowList.isTerraformDataSource">is_terraform_data_source</a></code> | *No description.* |

---

##### `is_construct` <a name="is_construct" id="@cdktf/provider-github.dataGithubOrganizationIpAllowList.DataGithubOrganizationIpAllowList.isConstruct"></a>

```python
from cdktf_cdktf_provider_github import data_github_organization_ip_allow_list

dataGithubOrganizationIpAllowList.DataGithubOrganizationIpAllowList.is_construct(
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

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-github.dataGithubOrganizationIpAllowList.DataGithubOrganizationIpAllowList.isConstruct.parameter.x"></a>

- *Type:* typing.Any

Any object.

---

##### `is_terraform_element` <a name="is_terraform_element" id="@cdktf/provider-github.dataGithubOrganizationIpAllowList.DataGithubOrganizationIpAllowList.isTerraformElement"></a>

```python
from cdktf_cdktf_provider_github import data_github_organization_ip_allow_list

dataGithubOrganizationIpAllowList.DataGithubOrganizationIpAllowList.is_terraform_element(
  x: typing.Any
)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-github.dataGithubOrganizationIpAllowList.DataGithubOrganizationIpAllowList.isTerraformElement.parameter.x"></a>

- *Type:* typing.Any

---

##### `is_terraform_data_source` <a name="is_terraform_data_source" id="@cdktf/provider-github.dataGithubOrganizationIpAllowList.DataGithubOrganizationIpAllowList.isTerraformDataSource"></a>

```python
from cdktf_cdktf_provider_github import data_github_organization_ip_allow_list

dataGithubOrganizationIpAllowList.DataGithubOrganizationIpAllowList.is_terraform_data_source(
  x: typing.Any
)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-github.dataGithubOrganizationIpAllowList.DataGithubOrganizationIpAllowList.isTerraformDataSource.parameter.x"></a>

- *Type:* typing.Any

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-github.dataGithubOrganizationIpAllowList.DataGithubOrganizationIpAllowList.property.node">node</a></code> | <code>constructs.Node</code> | The tree node. |
| <code><a href="#@cdktf/provider-github.dataGithubOrganizationIpAllowList.DataGithubOrganizationIpAllowList.property.cdktfStack">cdktf_stack</a></code> | <code>cdktf.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktf/provider-github.dataGithubOrganizationIpAllowList.DataGithubOrganizationIpAllowList.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-github.dataGithubOrganizationIpAllowList.DataGithubOrganizationIpAllowList.property.friendlyUniqueId">friendly_unique_id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-github.dataGithubOrganizationIpAllowList.DataGithubOrganizationIpAllowList.property.terraformMetaArguments">terraform_meta_arguments</a></code> | <code>typing.Mapping[typing.Any]</code> | *No description.* |
| <code><a href="#@cdktf/provider-github.dataGithubOrganizationIpAllowList.DataGithubOrganizationIpAllowList.property.terraformResourceType">terraform_resource_type</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-github.dataGithubOrganizationIpAllowList.DataGithubOrganizationIpAllowList.property.terraformGeneratorMetadata">terraform_generator_metadata</a></code> | <code>cdktf.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktf/provider-github.dataGithubOrganizationIpAllowList.DataGithubOrganizationIpAllowList.property.count">count</a></code> | <code>typing.Union[typing.Union[int, float], cdktf.TerraformCount]</code> | *No description.* |
| <code><a href="#@cdktf/provider-github.dataGithubOrganizationIpAllowList.DataGithubOrganizationIpAllowList.property.dependsOn">depends_on</a></code> | <code>typing.List[str]</code> | *No description.* |
| <code><a href="#@cdktf/provider-github.dataGithubOrganizationIpAllowList.DataGithubOrganizationIpAllowList.property.forEach">for_each</a></code> | <code>cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-github.dataGithubOrganizationIpAllowList.DataGithubOrganizationIpAllowList.property.lifecycle">lifecycle</a></code> | <code>cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-github.dataGithubOrganizationIpAllowList.DataGithubOrganizationIpAllowList.property.provider">provider</a></code> | <code>cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-github.dataGithubOrganizationIpAllowList.DataGithubOrganizationIpAllowList.property.ipAllowList">ip_allow_list</a></code> | <code><a href="#@cdktf/provider-github.dataGithubOrganizationIpAllowList.DataGithubOrganizationIpAllowListIpAllowListStructList">DataGithubOrganizationIpAllowListIpAllowListStructList</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-github.dataGithubOrganizationIpAllowList.DataGithubOrganizationIpAllowList.property.idInput">id_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-github.dataGithubOrganizationIpAllowList.DataGithubOrganizationIpAllowList.property.id">id</a></code> | <code>str</code> | *No description.* |

---

##### `node`<sup>Required</sup> <a name="node" id="@cdktf/provider-github.dataGithubOrganizationIpAllowList.DataGithubOrganizationIpAllowList.property.node"></a>

```python
node: Node
```

- *Type:* constructs.Node

The tree node.

---

##### `cdktf_stack`<sup>Required</sup> <a name="cdktf_stack" id="@cdktf/provider-github.dataGithubOrganizationIpAllowList.DataGithubOrganizationIpAllowList.property.cdktfStack"></a>

```python
cdktf_stack: TerraformStack
```

- *Type:* cdktf.TerraformStack

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-github.dataGithubOrganizationIpAllowList.DataGithubOrganizationIpAllowList.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `friendly_unique_id`<sup>Required</sup> <a name="friendly_unique_id" id="@cdktf/provider-github.dataGithubOrganizationIpAllowList.DataGithubOrganizationIpAllowList.property.friendlyUniqueId"></a>

```python
friendly_unique_id: str
```

- *Type:* str

---

##### `terraform_meta_arguments`<sup>Required</sup> <a name="terraform_meta_arguments" id="@cdktf/provider-github.dataGithubOrganizationIpAllowList.DataGithubOrganizationIpAllowList.property.terraformMetaArguments"></a>

```python
terraform_meta_arguments: typing.Mapping[typing.Any]
```

- *Type:* typing.Mapping[typing.Any]

---

##### `terraform_resource_type`<sup>Required</sup> <a name="terraform_resource_type" id="@cdktf/provider-github.dataGithubOrganizationIpAllowList.DataGithubOrganizationIpAllowList.property.terraformResourceType"></a>

```python
terraform_resource_type: str
```

- *Type:* str

---

##### `terraform_generator_metadata`<sup>Optional</sup> <a name="terraform_generator_metadata" id="@cdktf/provider-github.dataGithubOrganizationIpAllowList.DataGithubOrganizationIpAllowList.property.terraformGeneratorMetadata"></a>

```python
terraform_generator_metadata: TerraformProviderGeneratorMetadata
```

- *Type:* cdktf.TerraformProviderGeneratorMetadata

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-github.dataGithubOrganizationIpAllowList.DataGithubOrganizationIpAllowList.property.count"></a>

```python
count: typing.Union[typing.Union[int, float], TerraformCount]
```

- *Type:* typing.Union[typing.Union[int, float], cdktf.TerraformCount]

---

##### `depends_on`<sup>Optional</sup> <a name="depends_on" id="@cdktf/provider-github.dataGithubOrganizationIpAllowList.DataGithubOrganizationIpAllowList.property.dependsOn"></a>

```python
depends_on: typing.List[str]
```

- *Type:* typing.List[str]

---

##### `for_each`<sup>Optional</sup> <a name="for_each" id="@cdktf/provider-github.dataGithubOrganizationIpAllowList.DataGithubOrganizationIpAllowList.property.forEach"></a>

```python
for_each: ITerraformIterator
```

- *Type:* cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-github.dataGithubOrganizationIpAllowList.DataGithubOrganizationIpAllowList.property.lifecycle"></a>

```python
lifecycle: TerraformResourceLifecycle
```

- *Type:* cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-github.dataGithubOrganizationIpAllowList.DataGithubOrganizationIpAllowList.property.provider"></a>

```python
provider: TerraformProvider
```

- *Type:* cdktf.TerraformProvider

---

##### `ip_allow_list`<sup>Required</sup> <a name="ip_allow_list" id="@cdktf/provider-github.dataGithubOrganizationIpAllowList.DataGithubOrganizationIpAllowList.property.ipAllowList"></a>

```python
ip_allow_list: DataGithubOrganizationIpAllowListIpAllowListStructList
```

- *Type:* <a href="#@cdktf/provider-github.dataGithubOrganizationIpAllowList.DataGithubOrganizationIpAllowListIpAllowListStructList">DataGithubOrganizationIpAllowListIpAllowListStructList</a>

---

##### `id_input`<sup>Optional</sup> <a name="id_input" id="@cdktf/provider-github.dataGithubOrganizationIpAllowList.DataGithubOrganizationIpAllowList.property.idInput"></a>

```python
id_input: str
```

- *Type:* str

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-github.dataGithubOrganizationIpAllowList.DataGithubOrganizationIpAllowList.property.id"></a>

```python
id: str
```

- *Type:* str

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-github.dataGithubOrganizationIpAllowList.DataGithubOrganizationIpAllowList.property.tfResourceType">tfResourceType</a></code> | <code>str</code> | *No description.* |

---

##### `tfResourceType`<sup>Required</sup> <a name="tfResourceType" id="@cdktf/provider-github.dataGithubOrganizationIpAllowList.DataGithubOrganizationIpAllowList.property.tfResourceType"></a>

```python
tfResourceType: str
```

- *Type:* str

---

## Structs <a name="Structs" id="Structs"></a>

### DataGithubOrganizationIpAllowListConfig <a name="DataGithubOrganizationIpAllowListConfig" id="@cdktf/provider-github.dataGithubOrganizationIpAllowList.DataGithubOrganizationIpAllowListConfig"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-github.dataGithubOrganizationIpAllowList.DataGithubOrganizationIpAllowListConfig.Initializer"></a>

```python
from cdktf_cdktf_provider_github import data_github_organization_ip_allow_list

dataGithubOrganizationIpAllowList.DataGithubOrganizationIpAllowListConfig(
  connection: typing.Union[SSHProvisionerConnection, WinrmProvisionerConnection] = None,
  count: typing.Union[typing.Union[int, float], TerraformCount] = None,
  depends_on: typing.List[ITerraformDependable] = None,
  for_each: ITerraformIterator = None,
  lifecycle: TerraformResourceLifecycle = None,
  provider: TerraformProvider = None,
  provisioners: typing.List[typing.Union[FileProvisioner, LocalExecProvisioner, RemoteExecProvisioner]] = None,
  id: str = None
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-github.dataGithubOrganizationIpAllowList.DataGithubOrganizationIpAllowListConfig.property.connection">connection</a></code> | <code>typing.Union[cdktf.SSHProvisionerConnection, cdktf.WinrmProvisionerConnection]</code> | *No description.* |
| <code><a href="#@cdktf/provider-github.dataGithubOrganizationIpAllowList.DataGithubOrganizationIpAllowListConfig.property.count">count</a></code> | <code>typing.Union[typing.Union[int, float], cdktf.TerraformCount]</code> | *No description.* |
| <code><a href="#@cdktf/provider-github.dataGithubOrganizationIpAllowList.DataGithubOrganizationIpAllowListConfig.property.dependsOn">depends_on</a></code> | <code>typing.List[cdktf.ITerraformDependable]</code> | *No description.* |
| <code><a href="#@cdktf/provider-github.dataGithubOrganizationIpAllowList.DataGithubOrganizationIpAllowListConfig.property.forEach">for_each</a></code> | <code>cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-github.dataGithubOrganizationIpAllowList.DataGithubOrganizationIpAllowListConfig.property.lifecycle">lifecycle</a></code> | <code>cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-github.dataGithubOrganizationIpAllowList.DataGithubOrganizationIpAllowListConfig.property.provider">provider</a></code> | <code>cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-github.dataGithubOrganizationIpAllowList.DataGithubOrganizationIpAllowListConfig.property.provisioners">provisioners</a></code> | <code>typing.List[typing.Union[cdktf.FileProvisioner, cdktf.LocalExecProvisioner, cdktf.RemoteExecProvisioner]]</code> | *No description.* |
| <code><a href="#@cdktf/provider-github.dataGithubOrganizationIpAllowList.DataGithubOrganizationIpAllowListConfig.property.id">id</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/integrations/github/5.34.0/docs/data-sources/organization_ip_allow_list#id DataGithubOrganizationIpAllowList#id}. |

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktf/provider-github.dataGithubOrganizationIpAllowList.DataGithubOrganizationIpAllowListConfig.property.connection"></a>

```python
connection: typing.Union[SSHProvisionerConnection, WinrmProvisionerConnection]
```

- *Type:* typing.Union[cdktf.SSHProvisionerConnection, cdktf.WinrmProvisionerConnection]

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-github.dataGithubOrganizationIpAllowList.DataGithubOrganizationIpAllowListConfig.property.count"></a>

```python
count: typing.Union[typing.Union[int, float], TerraformCount]
```

- *Type:* typing.Union[typing.Union[int, float], cdktf.TerraformCount]

---

##### `depends_on`<sup>Optional</sup> <a name="depends_on" id="@cdktf/provider-github.dataGithubOrganizationIpAllowList.DataGithubOrganizationIpAllowListConfig.property.dependsOn"></a>

```python
depends_on: typing.List[ITerraformDependable]
```

- *Type:* typing.List[cdktf.ITerraformDependable]

---

##### `for_each`<sup>Optional</sup> <a name="for_each" id="@cdktf/provider-github.dataGithubOrganizationIpAllowList.DataGithubOrganizationIpAllowListConfig.property.forEach"></a>

```python
for_each: ITerraformIterator
```

- *Type:* cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-github.dataGithubOrganizationIpAllowList.DataGithubOrganizationIpAllowListConfig.property.lifecycle"></a>

```python
lifecycle: TerraformResourceLifecycle
```

- *Type:* cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-github.dataGithubOrganizationIpAllowList.DataGithubOrganizationIpAllowListConfig.property.provider"></a>

```python
provider: TerraformProvider
```

- *Type:* cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktf/provider-github.dataGithubOrganizationIpAllowList.DataGithubOrganizationIpAllowListConfig.property.provisioners"></a>

```python
provisioners: typing.List[typing.Union[FileProvisioner, LocalExecProvisioner, RemoteExecProvisioner]]
```

- *Type:* typing.List[typing.Union[cdktf.FileProvisioner, cdktf.LocalExecProvisioner, cdktf.RemoteExecProvisioner]]

---

##### `id`<sup>Optional</sup> <a name="id" id="@cdktf/provider-github.dataGithubOrganizationIpAllowList.DataGithubOrganizationIpAllowListConfig.property.id"></a>

```python
id: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/integrations/github/5.34.0/docs/data-sources/organization_ip_allow_list#id DataGithubOrganizationIpAllowList#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

### DataGithubOrganizationIpAllowListIpAllowListStruct <a name="DataGithubOrganizationIpAllowListIpAllowListStruct" id="@cdktf/provider-github.dataGithubOrganizationIpAllowList.DataGithubOrganizationIpAllowListIpAllowListStruct"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-github.dataGithubOrganizationIpAllowList.DataGithubOrganizationIpAllowListIpAllowListStruct.Initializer"></a>

```python
from cdktf_cdktf_provider_github import data_github_organization_ip_allow_list

dataGithubOrganizationIpAllowList.DataGithubOrganizationIpAllowListIpAllowListStruct()
```


## Classes <a name="Classes" id="Classes"></a>

### DataGithubOrganizationIpAllowListIpAllowListStructList <a name="DataGithubOrganizationIpAllowListIpAllowListStructList" id="@cdktf/provider-github.dataGithubOrganizationIpAllowList.DataGithubOrganizationIpAllowListIpAllowListStructList"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-github.dataGithubOrganizationIpAllowList.DataGithubOrganizationIpAllowListIpAllowListStructList.Initializer"></a>

```python
from cdktf_cdktf_provider_github import data_github_organization_ip_allow_list

dataGithubOrganizationIpAllowList.DataGithubOrganizationIpAllowListIpAllowListStructList(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  wraps_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-github.dataGithubOrganizationIpAllowList.DataGithubOrganizationIpAllowListIpAllowListStructList.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-github.dataGithubOrganizationIpAllowList.DataGithubOrganizationIpAllowListIpAllowListStructList.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-github.dataGithubOrganizationIpAllowList.DataGithubOrganizationIpAllowListIpAllowListStructList.Initializer.parameter.wrapsSet">wraps_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktf/provider-github.dataGithubOrganizationIpAllowList.DataGithubOrganizationIpAllowListIpAllowListStructList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-github.dataGithubOrganizationIpAllowList.DataGithubOrganizationIpAllowListIpAllowListStructList.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `wraps_set`<sup>Required</sup> <a name="wraps_set" id="@cdktf/provider-github.dataGithubOrganizationIpAllowList.DataGithubOrganizationIpAllowListIpAllowListStructList.Initializer.parameter.wrapsSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-github.dataGithubOrganizationIpAllowList.DataGithubOrganizationIpAllowListIpAllowListStructList.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-github.dataGithubOrganizationIpAllowList.DataGithubOrganizationIpAllowListIpAllowListStructList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-github.dataGithubOrganizationIpAllowList.DataGithubOrganizationIpAllowListIpAllowListStructList.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-github.dataGithubOrganizationIpAllowList.DataGithubOrganizationIpAllowListIpAllowListStructList.get">get</a></code> | *No description.* |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktf/provider-github.dataGithubOrganizationIpAllowList.DataGithubOrganizationIpAllowListIpAllowListStructList.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `resolve` <a name="resolve" id="@cdktf/provider-github.dataGithubOrganizationIpAllowList.DataGithubOrganizationIpAllowListIpAllowListStructList.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-github.dataGithubOrganizationIpAllowList.DataGithubOrganizationIpAllowListIpAllowListStructList.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktf/provider-github.dataGithubOrganizationIpAllowList.DataGithubOrganizationIpAllowListIpAllowListStructList.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktf/provider-github.dataGithubOrganizationIpAllowList.DataGithubOrganizationIpAllowListIpAllowListStructList.get"></a>

```python
def get(
  index: typing.Union[int, float]
) -> DataGithubOrganizationIpAllowListIpAllowListStructOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktf/provider-github.dataGithubOrganizationIpAllowList.DataGithubOrganizationIpAllowListIpAllowListStructList.get.parameter.index"></a>

- *Type:* typing.Union[int, float]

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-github.dataGithubOrganizationIpAllowList.DataGithubOrganizationIpAllowListIpAllowListStructList.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-github.dataGithubOrganizationIpAllowList.DataGithubOrganizationIpAllowListIpAllowListStructList.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktf/provider-github.dataGithubOrganizationIpAllowList.DataGithubOrganizationIpAllowListIpAllowListStructList.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-github.dataGithubOrganizationIpAllowList.DataGithubOrganizationIpAllowListIpAllowListStructList.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---


### DataGithubOrganizationIpAllowListIpAllowListStructOutputReference <a name="DataGithubOrganizationIpAllowListIpAllowListStructOutputReference" id="@cdktf/provider-github.dataGithubOrganizationIpAllowList.DataGithubOrganizationIpAllowListIpAllowListStructOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-github.dataGithubOrganizationIpAllowList.DataGithubOrganizationIpAllowListIpAllowListStructOutputReference.Initializer"></a>

```python
from cdktf_cdktf_provider_github import data_github_organization_ip_allow_list

dataGithubOrganizationIpAllowList.DataGithubOrganizationIpAllowListIpAllowListStructOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  complex_object_index: typing.Union[int, float],
  complex_object_is_from_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-github.dataGithubOrganizationIpAllowList.DataGithubOrganizationIpAllowListIpAllowListStructOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-github.dataGithubOrganizationIpAllowList.DataGithubOrganizationIpAllowListIpAllowListStructOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-github.dataGithubOrganizationIpAllowList.DataGithubOrganizationIpAllowListIpAllowListStructOutputReference.Initializer.parameter.complexObjectIndex">complex_object_index</a></code> | <code>typing.Union[int, float]</code> | the index of this item in the list. |
| <code><a href="#@cdktf/provider-github.dataGithubOrganizationIpAllowList.DataGithubOrganizationIpAllowListIpAllowListStructOutputReference.Initializer.parameter.complexObjectIsFromSet">complex_object_is_from_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktf/provider-github.dataGithubOrganizationIpAllowList.DataGithubOrganizationIpAllowListIpAllowListStructOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-github.dataGithubOrganizationIpAllowList.DataGithubOrganizationIpAllowListIpAllowListStructOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `complex_object_index`<sup>Required</sup> <a name="complex_object_index" id="@cdktf/provider-github.dataGithubOrganizationIpAllowList.DataGithubOrganizationIpAllowListIpAllowListStructOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* typing.Union[int, float]

the index of this item in the list.

---

##### `complex_object_is_from_set`<sup>Required</sup> <a name="complex_object_is_from_set" id="@cdktf/provider-github.dataGithubOrganizationIpAllowList.DataGithubOrganizationIpAllowListIpAllowListStructOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-github.dataGithubOrganizationIpAllowList.DataGithubOrganizationIpAllowListIpAllowListStructOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-github.dataGithubOrganizationIpAllowList.DataGithubOrganizationIpAllowListIpAllowListStructOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-github.dataGithubOrganizationIpAllowList.DataGithubOrganizationIpAllowListIpAllowListStructOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-github.dataGithubOrganizationIpAllowList.DataGithubOrganizationIpAllowListIpAllowListStructOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-github.dataGithubOrganizationIpAllowList.DataGithubOrganizationIpAllowListIpAllowListStructOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-github.dataGithubOrganizationIpAllowList.DataGithubOrganizationIpAllowListIpAllowListStructOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-github.dataGithubOrganizationIpAllowList.DataGithubOrganizationIpAllowListIpAllowListStructOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-github.dataGithubOrganizationIpAllowList.DataGithubOrganizationIpAllowListIpAllowListStructOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-github.dataGithubOrganizationIpAllowList.DataGithubOrganizationIpAllowListIpAllowListStructOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-github.dataGithubOrganizationIpAllowList.DataGithubOrganizationIpAllowListIpAllowListStructOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-github.dataGithubOrganizationIpAllowList.DataGithubOrganizationIpAllowListIpAllowListStructOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-github.dataGithubOrganizationIpAllowList.DataGithubOrganizationIpAllowListIpAllowListStructOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-github.dataGithubOrganizationIpAllowList.DataGithubOrganizationIpAllowListIpAllowListStructOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktf/provider-github.dataGithubOrganizationIpAllowList.DataGithubOrganizationIpAllowListIpAllowListStructOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktf/provider-github.dataGithubOrganizationIpAllowList.DataGithubOrganizationIpAllowListIpAllowListStructOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-github.dataGithubOrganizationIpAllowList.DataGithubOrganizationIpAllowListIpAllowListStructOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktf/provider-github.dataGithubOrganizationIpAllowList.DataGithubOrganizationIpAllowListIpAllowListStructOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-github.dataGithubOrganizationIpAllowList.DataGithubOrganizationIpAllowListIpAllowListStructOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktf/provider-github.dataGithubOrganizationIpAllowList.DataGithubOrganizationIpAllowListIpAllowListStructOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-github.dataGithubOrganizationIpAllowList.DataGithubOrganizationIpAllowListIpAllowListStructOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktf/provider-github.dataGithubOrganizationIpAllowList.DataGithubOrganizationIpAllowListIpAllowListStructOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-github.dataGithubOrganizationIpAllowList.DataGithubOrganizationIpAllowListIpAllowListStructOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktf/provider-github.dataGithubOrganizationIpAllowList.DataGithubOrganizationIpAllowListIpAllowListStructOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-github.dataGithubOrganizationIpAllowList.DataGithubOrganizationIpAllowListIpAllowListStructOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktf/provider-github.dataGithubOrganizationIpAllowList.DataGithubOrganizationIpAllowListIpAllowListStructOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-github.dataGithubOrganizationIpAllowList.DataGithubOrganizationIpAllowListIpAllowListStructOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktf/provider-github.dataGithubOrganizationIpAllowList.DataGithubOrganizationIpAllowListIpAllowListStructOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-github.dataGithubOrganizationIpAllowList.DataGithubOrganizationIpAllowListIpAllowListStructOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktf/provider-github.dataGithubOrganizationIpAllowList.DataGithubOrganizationIpAllowListIpAllowListStructOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-github.dataGithubOrganizationIpAllowList.DataGithubOrganizationIpAllowListIpAllowListStructOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktf/provider-github.dataGithubOrganizationIpAllowList.DataGithubOrganizationIpAllowListIpAllowListStructOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-github.dataGithubOrganizationIpAllowList.DataGithubOrganizationIpAllowListIpAllowListStructOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktf/provider-github.dataGithubOrganizationIpAllowList.DataGithubOrganizationIpAllowListIpAllowListStructOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-github.dataGithubOrganizationIpAllowList.DataGithubOrganizationIpAllowListIpAllowListStructOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktf/provider-github.dataGithubOrganizationIpAllowList.DataGithubOrganizationIpAllowListIpAllowListStructOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-github.dataGithubOrganizationIpAllowList.DataGithubOrganizationIpAllowListIpAllowListStructOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktf/provider-github.dataGithubOrganizationIpAllowList.DataGithubOrganizationIpAllowListIpAllowListStructOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-github.dataGithubOrganizationIpAllowList.DataGithubOrganizationIpAllowListIpAllowListStructOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-github.dataGithubOrganizationIpAllowList.DataGithubOrganizationIpAllowListIpAllowListStructOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-github.dataGithubOrganizationIpAllowList.DataGithubOrganizationIpAllowListIpAllowListStructOutputReference.property.allowListValue">allow_list_value</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-github.dataGithubOrganizationIpAllowList.DataGithubOrganizationIpAllowListIpAllowListStructOutputReference.property.createdAt">created_at</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-github.dataGithubOrganizationIpAllowList.DataGithubOrganizationIpAllowListIpAllowListStructOutputReference.property.id">id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-github.dataGithubOrganizationIpAllowList.DataGithubOrganizationIpAllowListIpAllowListStructOutputReference.property.isActive">is_active</a></code> | <code>cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-github.dataGithubOrganizationIpAllowList.DataGithubOrganizationIpAllowListIpAllowListStructOutputReference.property.name">name</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-github.dataGithubOrganizationIpAllowList.DataGithubOrganizationIpAllowListIpAllowListStructOutputReference.property.updatedAt">updated_at</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-github.dataGithubOrganizationIpAllowList.DataGithubOrganizationIpAllowListIpAllowListStructOutputReference.property.internalValue">internal_value</a></code> | <code><a href="#@cdktf/provider-github.dataGithubOrganizationIpAllowList.DataGithubOrganizationIpAllowListIpAllowListStruct">DataGithubOrganizationIpAllowListIpAllowListStruct</a></code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktf/provider-github.dataGithubOrganizationIpAllowList.DataGithubOrganizationIpAllowListIpAllowListStructOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-github.dataGithubOrganizationIpAllowList.DataGithubOrganizationIpAllowListIpAllowListStructOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `allow_list_value`<sup>Required</sup> <a name="allow_list_value" id="@cdktf/provider-github.dataGithubOrganizationIpAllowList.DataGithubOrganizationIpAllowListIpAllowListStructOutputReference.property.allowListValue"></a>

```python
allow_list_value: str
```

- *Type:* str

---

##### `created_at`<sup>Required</sup> <a name="created_at" id="@cdktf/provider-github.dataGithubOrganizationIpAllowList.DataGithubOrganizationIpAllowListIpAllowListStructOutputReference.property.createdAt"></a>

```python
created_at: str
```

- *Type:* str

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-github.dataGithubOrganizationIpAllowList.DataGithubOrganizationIpAllowListIpAllowListStructOutputReference.property.id"></a>

```python
id: str
```

- *Type:* str

---

##### `is_active`<sup>Required</sup> <a name="is_active" id="@cdktf/provider-github.dataGithubOrganizationIpAllowList.DataGithubOrganizationIpAllowListIpAllowListStructOutputReference.property.isActive"></a>

```python
is_active: IResolvable
```

- *Type:* cdktf.IResolvable

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktf/provider-github.dataGithubOrganizationIpAllowList.DataGithubOrganizationIpAllowListIpAllowListStructOutputReference.property.name"></a>

```python
name: str
```

- *Type:* str

---

##### `updated_at`<sup>Required</sup> <a name="updated_at" id="@cdktf/provider-github.dataGithubOrganizationIpAllowList.DataGithubOrganizationIpAllowListIpAllowListStructOutputReference.property.updatedAt"></a>

```python
updated_at: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktf/provider-github.dataGithubOrganizationIpAllowList.DataGithubOrganizationIpAllowListIpAllowListStructOutputReference.property.internalValue"></a>

```python
internal_value: DataGithubOrganizationIpAllowListIpAllowListStruct
```

- *Type:* <a href="#@cdktf/provider-github.dataGithubOrganizationIpAllowList.DataGithubOrganizationIpAllowListIpAllowListStruct">DataGithubOrganizationIpAllowListIpAllowListStruct</a>

---



